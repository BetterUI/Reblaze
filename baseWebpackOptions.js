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
      exclude: /(node_modules|bower_components|dist|lib|vendor)/,
      loader: 'eslint-loader'
    }
  ],
  alias: {
    actions: path.resolve(__dirname, 'client/js/actions'),
    components: path.resolve(__dirname, 'client/js/components'),
    models: path.resolve(__dirname, 'client/js/models'),
    constants: path.resolve(__dirname, 'client/js/constants'),
    containers: path.resolve(__dirname, 'client/js/containers'),
    layouts: path.resolve(__dirname, 'client/js/layouts'),
    reducers: path.resolve(__dirname, 'client/js/reducers'),
    routes: path.resolve(__dirname, 'client/js/routes'),
    middleware: path.resolve(__dirname, 'client/js/middleware'),
    store: path.resolve(__dirname, 'client/js/store'),
    resources: path.resolve(__dirname, 'client/js/resources'),
    utils: path.resolve(__dirname, 'client/js/utils'),
    styles: path.resolve(__dirname, 'client/styles'),
    vendor: path.resolve(__dirname, 'client/vendor')
  },
  plugins: []
};
