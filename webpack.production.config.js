var config = require('./baseWebpackOptions');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, './'),
  entry: {
    Address: './src/Address',
    Alert: './src/Alert',
    Alightment: './src/Alightment',
    App: './src/App',
    Badges: './src/Badges',
    Bubble: './src/Bubble',
    Button: './src/Button',
    ButtonGroup: './src/ButtonGroup',
    Card: './src/Card',
    Checkbox: './src/Checkbox',
    Drawer: './src/Drawer',
    FieldGroup: './src/FieldGroup',
    FieldSet: './src/FieldSet',
    FormElement: './src/FormElement',
    Heading: './src/Heading',
    Inline: './src/Inline',
    Input: './src/Input',
    InputGroup: './src/InputGroup',
    Menu: './src/Menu',
    Modals: './src/Modals',
    Navs: './src/Navs',
    Overlays: './src/Overlays',
    Ranges: './src/Ranges',
    Select: './src/Select',
    Table: './src/Table',
    Tabs: './src/Tabs',
    Tags: './src/Tags',
    Toasts: './src/Toasts',
    Toggles: './src/Toggles',
    Trees: './src/Trees'
  },
  output: {
    filename: '[name].js',
    path: './dist',
    library: 'reblaze',
    libraryTarget: 'umd'
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
        include: path.join(__dirname, './'),
        loaders: ['babel-loader']
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
    .concat(config.plugins)
}
