const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    }),
    // new ExtractTextPlugin('css/style.css'),
    new PrettierPlugin()
  ],
  devServer: {
    contentBase: './dist'
  }
}