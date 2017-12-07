const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const localIdentName = '?modules&camelCase&localIdentName=[name]-[local]-[hash:5]';
const BaseConfig = require('./webpack.base.config');

module.exports = merge(BaseConfig, {
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      './src',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_module|src\/styles/,
        use: ['style-loader', 'css-loader' + localIdentName, 'less-loader']
      },
      {
        test: /\.less$/,
        include: /node_module|src\/styles/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_module|src\/styles/,
        use: ['style-loader', 'css-loader' + localIdentName]
      },
      {
        test: /\.css$/,
        include: /node_module|src\/styles/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'manifest'],
    //   filename: '[name].js?[hash:8]'
    // }),
    new HtmlWebpackPlugin({
      filename: '../server/template/index.html',
      template: './src/index.html',
      inject: "body",
    }),
    new ProgressBarPlugin({ summary: false })
  ].concat(BaseConfig.plugins)
});
