process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // 方便进行https请求
process.env.NODE_ENV = 'development';
require("../server/babel");
const core = require('../server/core.js');
const convert = require('koa-convert');
const webpack = require('webpack');
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const devMiddleware = require('koa-webpack-dev-middleware');
const hotMiddleware = require('koa-webpack-hot-middleware');
const devConfig = require('../webpack/webpack.client.dev.js');
const compiler = webpack(devConfig);


compiler.plugin('emit', (compilation, callback) => {
  const assets = compilation.assets;
  let file, data;

  Object.keys(assets).forEach(key => {
    if (key.match(/\.html|\.ejs$/)) {
      file = path.resolve(__dirname, key);
      data = assets[key].source();
      fs.writeFileSync(file, data);
    }
  });
  callback()
});


const app = core();
const port = app.port;
app.env = process.env.NODE_ENV;

app.use(convert(devMiddleware(compiler, {
  noInfo: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  stats: {
    colors: true
  },
  publicPath: devConfig.output.publicPath
})));

app.use(convert(hotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
})));


let isListened = false;
compiler._plugins['after-compile'].push(function (compilation, callback) {
  callback();
  !isListened && app.listen(port, function () {
    console.log(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`);
    isListened = true
  })
});

const watcher = chokidar.watch([
  path.join(__dirname, '../src'),
  path.join(__dirname, '../server')
]);

watcher.on('ready', function () {
  watcher.on('all', function (e, p) {
    console.log("Clearing module cache");
    Object.keys(require.cache).forEach(function (id) {
      if (/\/front\/src|\/front\/server/.test(id)) {
        console.log(id);
        delete require.cache[id];
      }
    });
  })
});
