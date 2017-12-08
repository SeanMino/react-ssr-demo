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
  const renderStart = new Date().getTime();
  let string = await getFromRedis(url, async() => {

    let renderProps = await getRenderProps(url);
    if (!renderProps) {
      return false
    }

    let data = await getRenderData(renderProps);
    if (!data) {
      return false
    }

    // console.log("getRenderData:", url, new Date().getTime() - renderStart, "ms");

    let string = await getTemplate(data);
    if (!string) {
      return false
    }

    const now = new Date().getTime();
    // console.log("缓存击穿:", url, now - renderStart, "ms");
    return string
  });

  if (string) {
    ctx.body = string;
    const now = new Date().getTime();
    // console.log("服务端render:", url, now - renderStart, "ms");
  }
  else {
    await next();
    const now = new Date().getTime();
    // console.log("服务端输出:", url, now - renderStart, "ms");
  }
}


async function getFromRedis(key, doPromise) {
  // console.log('查询Redis', key);
  const start = new Date().getTime();
  let result = await redis.get(key);
  if (result === null || result === undefined) {
    let resp = await doPromise();
    await redis.set(key, resp, 10 * 60); // 缓存为10分钟
    const now = new Date().getTime();
    // console.log('doPromise:', key, now - start + "ms");
    return resp
  } else {
    const now = new Date().getTime();
    // console.log('doRedis:', key, now - start + "ms");
    return result;
  }
}

function getRenderProps(url) {
  const start = new Date().getTime();
  return new Promise((resovle, rej) => {
    match({ routes, location: url }, (error, redirectLocation, renderProps) => {
      const now = new Date().getTime();
      if (error) {
        console.log('url错误', url, error);
        resovle(undefined);
      } else {
        resovle(renderProps);
      }
      // console.log("getRenderProps输出:", url, now - start, "ms");
    });
  })
}

async function getRenderData(_renderProps) {
  if (!_renderProps) {
    return false
  }
  const start = new Date().getTime();

  let initState = {};
  let htmlString;

  for (let component of _renderProps.components) {
    if (component && component.getInitialProps) {
      let data = await component.getInitialProps(_renderProps);
      initState = Object.assign(initState, data);
      component.defaultProps = Object.assign({}, component.defaultProps, data);
    }
  }

  // console.log("getRenderData输出1:", new Date().getTime() - start, "ms");

  htmlString = renderToStaticMarkup(
    <RouterContext {..._renderProps}/>
  );

  // 渲染頭部
  let head = Head.rewind() || defaultHead();
  let headString = renderToString(
    <HeadToHtml head={head}/>
  );
  const now = new Date().getTime();
  // console.log("getRenderData输出2:", new Date().getTime() - start, "ms");

  return {
    html: htmlString,
    state: initState,
    head: headString
  };
}

// 输出渲染模板
async function getTemplate(data) {
  return new Promise((resolve, reject) => {
    let result = fs.readFileSync(path.resolve(__dirname, '../template/index.html'), 'utf-8');
    data.state = JSON.stringify(data.state);
    let template = result.replace(/{{([^}}]+)?}}/g, function (s0, s1) {
      return data[s1] ? data[s1] : "";
    });
    resolve(template);
  })
}

export default clientRoute