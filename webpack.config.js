const path = require('path')
// 引入html-webpack-plugin 插件 
const htmlWebpackPlugin = require('html-webpack-plugin')

const webpackPlugin = new htmlWebpackPlugin({
  // 引入要写入内存的文件  
  template: path.join(__dirname, './src/index.html'),
  // 给输出的文件取名
  filename: 'index.html'
})


module.exports = {
  mode: 'development',  //production 上线需要  //development
  plugins: [
    webpackPlugin
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
    ]
  }
}