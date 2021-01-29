const { merge } = require('webpack-merge');
const path = require('path')
const config = require('./webpack.config.js');

const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(config, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[contenthash].bundle.js'
  },
});