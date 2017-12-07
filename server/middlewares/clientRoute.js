import fs from "fs";
import path from 'path'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router'
import Head, { defaultHead, HeadToHtml } from '../../lib/head/index'
import routes from '../../src/pages/routes'
const redis = require("../config/ioRedis");

async function clientRoute(ctx, next) {
  let url = ctx.url;
  let data = await getFromRedis(url, async() => {
    return await getRenderData(url)
  });

  if (data) {
    const renderStart = new Date().getTime();
    ctx.body = await getTemplate(data, url);
    const now = new Date().getTime();
    console.log("服务端render:", now - renderStart, "ms");
  }
  else {
    await next();
    // 重定向到404页面
    // if (ctx.status == 404) {
    //   ctx.redirect('/404')
    // }
  }
}


function getRenderProps(url) {
  return new Promise((resovle, rej) => {
    match({ routes, location: url }, (error, redirectLocation, renderProps) => {
      if (error) {
        console.log('url错误', url, error);
        resovle(undefined)
      } else {
        resovle(renderProps)
      }
    });
  })
}

async function getFromRedis(key, doPromise) {
  const start = new Date().getTime();
  let result = await redis.get(key);
  if (result === null || result === undefined) {
    let resp = await doPromise();
    await redis.set(key, resp, 10 * 60); // 缓存为10分钟
    const now = new Date().getTime();
    console.log('www端get:', now - start + "ms", key);
    return resp
  } else {
    const now = new Date().getTime();
    console.log('www端redis:', now - start + "ms", key);
    return result;
  }
}

async function getRenderData(url) {
  let _renderProps = await getRenderProps(url);

  if (!_renderProps) {
    return null
  }

  let initState = {};
  let htmlString;

  for (let component of _renderProps.components) {
    if (component && component.getInitialProps) {
      let data = await component.getInitialProps(_renderProps);
      initState = Object.assign(initState, data);
      component.defaultProps = Object.assign({}, component.defaultProps, data);
    }
  }

  htmlString = renderToString(
    <RouterContext {..._renderProps}/>
  );

  // 渲染頭部
  let head = Head.rewind() || defaultHead();
  let headString = renderToString(
    <HeadToHtml head={head}/>
  );

  return {
    html: htmlString,
    state: initState,
    head: headString
  };
}


// 输出渲染模板
async function getTemplate(data, key) {
  return await getFromRedis("template:" + key, () => {
    return new Promise((resolve, reject) => {
      let result = fs.readFileSync(path.resolve(__dirname, '../template/index.html'), 'utf-8');

      data.state = JSON.stringify(data.state);
      let template = result.replace(/{{([^}}]+)?}}/g, function (s0, s1) {
        return data[s1] ? data[s1] : "";
      });
      resolve(template);
    })
  });
}

export default clientRoute