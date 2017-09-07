const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('./package.json')

const webpack = require('webpack')

// Config object
const library = {
  name: 'VueAutoscroll',
  target: 'umd'
}

const DEV = process.env.NODE_ENV === 'development';

let webpackConfig = {
  entry: path.resolve(__dirname, config.main),
  watch: DEV,
  output: {
    library: library.name,
    libraryTarget: library.target,
    path: path.resolve(__dirname, "dist"),
    filename: (DEV) ? 'autoscroll.js' : 'autoscroll.min.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ],
  },
  plugins: []
}

if(!DEV) {
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}))
}

module.exports = webpackConfig
