const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './docs/index.js',
  output: {
    path: path.resolve(__dirname, 'docs/dist'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [require('@babel/plugin-proposal-class-properties')]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: require.resolve('html-loader')
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './docs/index.html'),
      filename: path.resolve(__dirname, './docs/dist/index.html')
    })
  ]
};
