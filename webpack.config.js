const path = require('path');
const config = require('./package.json');

const webpack = require('webpack');
require('dotenv').config();

const PROD = process.env.NODE_ENV === 'production';

// let plugins = [];

// PROD ? [
//   plugins.push(new webpack.optimize.UglifyJsPlugin({
//     compress: { warnings: false }
//   }))
// ] : '';

module.exports = {
  entry: path.resolve(__dirname, config.main),
  output: {
    library: process.env.NAME,
    libraryTarget: process.env.TARGET,
    path: path.resolve(__dirname, "dist"),
    filename: (PROD) ? 'autoscroll.min.js' : 'autoscroll.js'
  },
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ],
  }
  // plugins: plugins
};
