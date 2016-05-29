var webpack = require('webpack')

module.exports = {
  entry: './src/index',

  output: {
    filename: 'lib/index.js',
    library: 'MarkdownReact',
    libraryTarget: 'umd'
  },

  externals: {
    react: 'react'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  node: {
    Buffer: false
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]

}
