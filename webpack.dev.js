const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new WebpackBundleAnalyzer()],
});
