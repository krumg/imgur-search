var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  /*devtool: 'cheap-module-eval-source-map',*/
  entry: [
      APP_DIR + '/index.js'
  ],  
  output: {
    path: BUILD_DIR,
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
    loaders : [{
      test : /\.js/,
      include : APP_DIR,
      loader : 'babel-loader',
      query: {
        presets : ["es2015", "stage-0"]
      }
    }]
  }
};

module.exports = config;