var merge = require('webpack-merge').default
  , path = require('path')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , baseConfigs = require('./webpack.base')
  , ESLintPlugin = require('eslint-webpack-plugin')

module.exports = merge(baseConfigs, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './playground/index.jsx'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './playground/index.html'
    }),
    new ESLintPlugin()
  ],
  devServer: {
    stats: { chunks: false },
    contentBase: './playground',
    port: 5996,
    hot: true
  }
})