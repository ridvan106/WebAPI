const path = require('path');
 
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  
  entry: {
        app:['./Scripts/angular.js']
  },
  optimization: {
        minimize: false
    },
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
    plugins: [
    ],
  module: {
    rules: [
      {
        test: /\.cshtml$/,
        use: [
          { loader: 'html-loader' },
        ]
      }
    ]
  }
};