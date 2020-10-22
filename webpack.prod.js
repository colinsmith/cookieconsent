"use strict"

const join = require( "path" ).join
const merge = require('webpack-merge')
const common = require( "./webpack.common.js" )
const MinifyPlugin = require("babel-minify-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
      path: join( __dirname, 'build' ),
      filename: 'cookieconsent.min.js'
    },
    optimization: {
      moduleIds         : 'total-size',
      mangleWasmImports : true,
      concatenateModules: false,
      minimizer: [
         new OptimizeCSSAssetsPlugin({})
      ]
    },
    module: {
      rules: [
        {
          test  : /\.js?$/,
          loader: "string-replace-loader",
          options: {
            search : "(?<=>)\\n\ {2,}|\\n\ {2,}(?=<)",
            replace: () => '',
            flags  : "g"
          }
        },
        {
          test: /\.scss?$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
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
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: 'cookieconsent.min.css' }),
      new MinifyPlugin({
        removeDebugger: true,
        removeConsole : true,
        mangle        : true
      },{
        sourceMap: false,
        comments : false
      })
    ]
  })
