process.env.NODE_ENV = "production";
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //提炼css
const localIdentName = '?modules&camelCase&localIdentName=[name]-[local]-[hash:5]';
const getStyleLoader = require("./styleLoader.js");
const UtilPlugin = require('./utilPlugin');
const BaseConfig = require('./webpack.base.config');

const clientConfig = merge(BaseConfig, {
  context: path.resolve(__dirname, '..'),
  entry: {
    main: './src',
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].js?[chunkhash:8]',
    chunkFilename: '[name].js?[chunkhash:8]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_module|src\/styles/,
        use: ExtractTextPlugin.extract(getStyleLoader(["css-module", "postcss"]))
      },
      {
        test: /\.css$/,
        include: /node_module|src\/styles/,
        use: ExtractTextPlugin.extract(getStyleLoader(["css", "postcss"]))
      },
      {
        test: /\.less$/,
        exclude: /node_module|src\/styles/,
        use: ExtractTextPlugin.extract(getStyleLoader(["css-module", "postcss", "less"]))
      },
      {
        test: /\.less$/,
        include: /node_module|src\/styles/,
        use: ExtractTextPlugin.extract(getStyleLoader(["css", "postcss", "less"]))
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false
    }),
    new HtmlWebpackPlugin({
      filename: '../../server/template/index.html',
      template: './src/index.html',
      inject: "body",
      minify: {
        removeComments: true,//去除注释
        collapseWhitespace: true // 去除空白
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css?[contenthash:8]', //css的打包地址,添加hash
      allChunks: true,
      disable: false
    }),
    new UtilPlugin({
      base: path.resolve(__dirname, '../'),
      copy: [
        {
          from: 'src/static',
          to: 'dist/client/static'
        }
      ],
    })
  ].concat(BaseConfig.plugins)
});

module.exports = clientConfig;