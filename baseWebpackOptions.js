var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var embedFileSize = 65536;
var assetsLoaders = [
  {test: /\.json$/, loader: 'json'},
  {test: /\.mp4$/, loader: 'url?limit=' + embedFileSize + '&mimetype=video/mp4'},
  {test: /\.svg.*$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'},
  {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
  {test: /\.jpg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
  {test: /\.gif$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
  {
    test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url?limit=' + embedFileSize
  }
];

module.exports = {
  assetsLoaders: assetsLoaders,
  preLoaders: [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components|dist|vendor)/,
      loader: 'eslint-loader'
    }
  ],
  alias: {
    src: path.resolve(__dirname, 'src'),
    demo: path.resolve(__dirname, 'demo')
  },
  plugins: []
};
