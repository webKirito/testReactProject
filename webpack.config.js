const path = require('path');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}