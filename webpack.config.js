'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/js/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/app/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
