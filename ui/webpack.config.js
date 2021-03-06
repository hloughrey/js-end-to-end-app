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
      { enforce: 'pre', 
        test: /\.jsx$|\.js$/, 
        loader: 'eslint-loader', 
        exclude: /node_modules/,
        options: {
          fix: true,
        }
      },
      { test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader', 
        query: {presets: ['es2015', 'react']}
      },
      { test: /\.scss?$/, 
        exclude: /node_modules/, 
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          // Parse scss into css and modularise it with a hash
          use: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap!sass-loader?sourceMap'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(path.resolve('.'), 'src', 'index.html')
    }),
    new ExtractTextPlugin({filename: "[name].[chunkhash].css", allChunks: true }),
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
