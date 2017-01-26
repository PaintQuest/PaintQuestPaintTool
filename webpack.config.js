'use strict';

const webpack = require("webpack");
const path = require("path");

module.exports = {
  //context: __dirname,
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname,
  },
  module: {
    rules: [
      /*{
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },*/
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["latest"] }
          }
        ],
      }
    ]
  },
};