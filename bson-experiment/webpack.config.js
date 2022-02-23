const path = require('path');

module.exports = {
  entry: './client/src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  module:{
    rules: [
        {
          test: /\.tsx?/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
  },
  mode:"development"
};