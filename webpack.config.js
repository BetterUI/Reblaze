var config = require('./baseWebpackOptions');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, './lib'),
  entry: {
    main: './index.js'
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: config.assetsLoaders.concat([
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'
        )
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, './lib'),
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      }
    ]),
    preLoaders: config.preLoaders
  },
  resolve: {
    extensions: ['', '.js'],
    alias: config.alias
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
    .concat([
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
      })
    ])
    .concat(config.plugins),

  devServer: {
    contentBase: './lib',
    hot: true
  }
}
