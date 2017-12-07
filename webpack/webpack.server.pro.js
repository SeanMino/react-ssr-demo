process.env.NODE_ENV = "production";
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const localIdentName = '?modules&camelCase&localIdentName=[name]-[local]-[hash:5]';
const BaseConfig = require('./webpack.base.config');

function getExternals() {
  return fs.readdirSync(path.resolve(__dirname, '../node_modules'))
    .filter(filename => !filename.includes('.bin'))
    .reduce((externals, filename) => {
      externals[filename] = `commonjs ${filename}`;
      return externals
    }, {})
}

let serverConfig = merge(BaseConfig, {
  context: path.resolve(__dirname, '..'),
  entry: { server: './webpack/server.entry.pro' },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    chunkFilename: '[name].js', // 服务端不要生成hash值。容易出错
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['es2015', 'react', 'stage-0'],
              plugins: ['add-module-exports'],
              cacheDirectory: true
            }
          }
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_module/,
        use: ['css-loader/locals' + localIdentName, 'less-loader']
      },
      {
        test: /\.less$/,
        include: /node_module/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_module/,
        use: ['style-loader', 'css-loader' + localIdentName]
      }, {
        test: /\.css$/,
        include: /node_module/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: getExternals(),
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.isServer': true,
      'process.env.isBrowser': false
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   comments: false
    // }),
  ]
});

module.exports = serverConfig;