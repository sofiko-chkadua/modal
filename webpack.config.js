const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: ['./index.js', './valid.js'] },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2)$/,
        loader: 'file-loader'
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new MiniCssExtractPlugin()
  ]
};
