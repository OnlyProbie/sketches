const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    login: './src/login.js'
  },
  output: {
    path:path.join(__dirname, 'dist'),
    filename: '[name].[hash:8].js'   // hash chunkHash contentHash
  },
  // devServer 启动之后所有的文件都会写到内存里
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader']
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        type: 'asset/resource'
        // use: 'file-loader'
        // file:///E:/code/sketches/package/webpack-demo/dist/6cf018c2e641e6e8d090.jpeg
        // file:///E:/code/sketches/package/webpack-demo/dist/67296874c874ac14e1cc.jpeg
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true,
      chunks: ['index', 'login'],
      chunksSortMode: 'manual'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      parallel: true, // 开启多进程并行压缩
      cache: true // 缓存
    })]
  }
}