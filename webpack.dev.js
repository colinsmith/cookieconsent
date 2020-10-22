"use strict"

const join = require( "path" ).join
const merge = require('webpack-merge')
const common = require( "./webpack.common.js" )
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: join( __dirname, 'src' ),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss?$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  // plugins: [
  //   new BundleAnalyzerPlugin()
  // ],
  watch: true
})
