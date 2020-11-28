var merge = require('webpack-merge')
  , MiniCssExtractPlugin = require('mini-css-extract-plugin')
  , CopyWebpackPlugin = require('copy-webpack-plugin')
  , OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
  , path = require('path')
  , baseConfigs = require('./webpack.base')

var entryNames = ['code-highlighter', 'color-picker', 'emoticon', 'max-length', 'header-id', 'table', 'markdown', 'mention']
var entries = {
  index: './index.js'
}

entryNames.forEach(item => entries[item] = `./${item}/index.jsx`)

module.exports = merge(baseConfigs, {
  mode: 'production',
  context: path.join(__dirname, '../src'),
  entry: entries,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'braft-editor': 'braft-editor',
    'draft-js': 'draft-js',
    'draft-convert': 'draft-convert',
    'draftjs-utils': 'draftjs-utils',
    'braft-finder': 'braft-finder',
    'braft-utils': 'braft-utils',
    'braft-convert': 'braft-convert',
    'immutable': 'immutable',
    'prismjs': 'prismjs',
    'draft-js-prism': 'draft-js-prism',
    'react-color': 'react-color',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /.css$/,
      cssProcessor: require('cssnano'),
      sourceMap: true,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        },
        zindex: false,
        safe: true
      }
    }),
    new CopyWebpackPlugin([
      {
        from: '../src/emoticon/images/*.*',
        to: '../dist/assets/',
        flatten: true
      },
    ])
  ]
})
