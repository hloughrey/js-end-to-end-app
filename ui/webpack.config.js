'use strict'
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Import 3rd party UI dependencies
const jquery = require('jquery');

module.exports = {
  target: 'web',
  cache: true,
  entry: {
    app: path.join(path.resolve('.'), 'src', 'Public', 'index.js')
  },
  resolve: {
    extension: ['', '.html', '.js', '.jsx', '.json', '.scss', '.css'],
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}},
      {test: /\.scss?$/, exclude: /node_modules/, loader: 'style-loader!css-loader!sass-loader!'},
      {test: /\.css?$/, loader: 'style-loader!css-loader!'},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(path.resolve('.'), 'src', 'Public', 'index.html')
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.NoErrorsPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    PublicPath: '/dist/',
    filename: 'bundle.js',
    pathInfo: true
  },
  devServer: {
    inline: true,
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  }
}
