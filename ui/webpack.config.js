'use strict'
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Import 3rd party UI dependencies
const jquery = require('jquery');

module.exports = {
  target: 'web',
  cache: true,
  entry: {
    app: path.join(path.resolve('.'), 'src', 'index.js')
  },
  resolve: {
    extensions: ['*', '.html', '.js', '.jsx', '.json', '.scss', '.css'],
  },
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}},
      {test: /\.scss?$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'sass-loader']
      })},
      {test: /\.css?$/, loader: 'style-loader!css-loader!'},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(path.resolve('.'), 'src', 'index.html')
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  }
}
