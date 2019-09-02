const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devServer: {
    port: 8089,
    host: '127.0.0.1',
    open: true,
    hot: true,
    overlay: {
      erros: true
    }
  },
  module: {
    rules: [{
      test: '/\.(png|jpe?g|gif|svg)(\?.*)?$/',
      use: [
        'url-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75
            }
          }
        }
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})