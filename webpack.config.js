const path = require('path');

const config = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'}
    ]
  }
};

module.exports = config;
