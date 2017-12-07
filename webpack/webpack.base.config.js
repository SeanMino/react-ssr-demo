const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const localIdentName = '?modules&localIdentName=[name]-[local]-[hash:5]';
const babelrc = require('../.babelrc.json');

const baseConfig = {
  context: path.resolve(__dirname, '..'),
  entry: {
    // vendor: [
    //   'react',
    //   'react-dom',
    //   'redux',
    //   'react-redux',
    //   'axios',
    //   'md5'
    // ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].js?[chunkhash:8]',
    chunkFilename: '[name].js?[chunkhash:8]',
    publicPath: '/'
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
              plugins: ['transform-runtime', 'add-module-exports'],
              cacheDirectory: true
            }
          }
        ],
      },
      {
        test: /\.(jpg|png|gif|webp)$/,
        use: ['url-loader?limit=8000']
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
        use: ['url-loader?limit=12000&name=fonts/[name].[ext]']
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader?minimize=false']
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx', 'json', '.less'] },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.isServer': false,
      'process.env.isBrowser': true
    }),
  ]
};

module.exports = baseConfig;