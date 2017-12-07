/**
 * 直接node运行本module，即可以开启服务端编译的node服务器，不过建议使用webpack打包好，在运行打包后的module,效率比较高
 * @type {string}
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // 方便进行https请求
process.env.NODE_ENV = "production";
require("./babel");

const path = require('path');
const serve = require('koa-static');
const core = require('./core');
const app = core();
const port = app.port;

app.listen(port);
app.use(serve(path.resolve(__dirname, '../dist/client')));

console.log(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`);
