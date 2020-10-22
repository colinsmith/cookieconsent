"use strict"

const join = require( "path" ).join
const common = require("./webpack.common.js")

const exp = Object.assign({}, common, {
    entry: join( __dirname, 'src', 'index.js' ),
    module: {
      rules: [
        {
          test   : /\.js?$/,
          loader : "babel-loader",
          options: {
            root    : __dirname,
            rootMode: "upward-optional"
          }
        }
      ]
    }
  })
  module.exports = exp
