const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [{
  target: 'node',
  entry: process.env.NODE_ENV === 'development'? undefined:['./server'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].server.bundle.js',
    chunkFilename: '[name].server.chunk.js',
		publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader'
      }]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'PORT': JSON.stringify(process.env.PORT? process.env.PORT : 80)
    })
  ]
}, {
  devtool: 'eval',
  entry: process.env.NODE_ENV === 'development'? [
    'webpack-dev-server/client?',
    './src'
  ]:['./src'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].react.bundle.js',
    chunkFilename: '[name].react.chunk.js',
		publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader'
      }]
    }, {
      test: /\.(jpe?g|png|gif|svg|mov|ttf|eot|woff2?)$/,
      use: [{
        loader: 'file-loader',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: '[hash].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.DefinePlugin({
      'PREFIX': JSON.stringify(process.env.PREFIX? process.env.PREFIX : '!')
    })
  ]
}]
