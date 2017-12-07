import path from 'path'
import Koa from 'koa'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-session'
import compress from 'koa-compress'
import convert from 'koa-convert'
import serve from 'koa-static'
import router from './routes';
import clientRoute from './middlewares/clientRoute';
const env = process.env.NODE_ENV;
const dev = env !== "production";
const config = require("./config/index");

export default (dir) => {
  const app = new Koa();

  app.keys = ['this is a fucking secret'];
  app.port = config.frontPort;
  app.use(convert(session(app)));
  app.use(compress());
  app.use(bodyParser());
  app.use(json());
  dev && app.use(logger());
  app.use(clientRoute);
  app.use(router.routes());
  app.use(router.allowedMethods());

  // 静态文件要放到最后加载，避免路由冲突
  dev && app.use(serve(path.resolve(__dirname, '../src')));

  return app
}
