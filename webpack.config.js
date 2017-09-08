const path = require('path')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const config = require('./package.json')

const webpack = require('webpack')

// Config object
const library = {
  name: 'VueAutoscroll',
  target: 'umd',
  entry: 'src/vueAutoscroll.js'
}

const DEV = process.env.NODE_ENV === 'development'
const WATCH = process.env.NODE_ENV === 'watch'
const PROD = process.env.NODE_ENV === 'production'

let webpackConfig = {
  entry: path.resolve(__dirname, library.entry),
  watch: WATCH,
  output: {
    library: library.name,
    libraryTarget: library.target,
    path: path.resolve(__dirname, 'dist'),
    filename: (PROD) ? 'vue-autoscroll.min.js' : 'vue-autoscroll.js',
    publicPath: '/dist/'
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: '_'
    }
  },
  devtool: DEV || WATCH ? 'cheap-module-eval-source-map' : 'source-map',
  devServer: {
    overlay: true,
    contentBase: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['eslint-loader']
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: []
}

if (PROD) {
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: { warnings: false }
  }))
}

module.exports = webpackConfig
