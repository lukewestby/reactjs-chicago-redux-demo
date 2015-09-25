var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {

  target: 'web',

  cache: true,

  node: {
    fs: 'empty'
  },

  entry: {
    app: path.join(__dirname, 'app.js'),
    common: [
      'react',
      'redux',
      'react-redux',
      'redux-devtools',
      'redux-thunk'
    ]
  },

  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src']
  },

  output: {
    path: path.join(__dirname, 'tmp'),
    publicPath: '',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?cacheDirectory&stage=0&optional=runtime']
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      templateContent: '<html><head><style>button{padding:6px;margin:1px;}</style></head><body><main></main></body></html>',
      inject: true
    }),
    new webpack.NoErrorsPlugin()
  ],

  debug: true,

  devtool: 'source-map',

  devServer: {
    contentBase: './tmp',
    historyApiFallback: true
  }
};
