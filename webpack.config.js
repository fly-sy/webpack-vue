const path = require('path')
// 引入html-webpack-plugin 插件 
const htmlWebpackPlugin = require('html-webpack-plugin')
// 引入vue-loader 插件 
const { VueLoaderPlugin } = require('vue-loader')


const webpackPlugin = new htmlWebpackPlugin({
  // 引入要写入内存的文件  
  template: path.join(__dirname, './index.html'),
  // 给输出的文件取名
  filename: 'index.html'
})


module.exports = {
  mode: 'development',  //production 上线需要  //development 开发需要
  plugins: [
    webpackPlugin,
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' }, // 处理 图片路径的 loader
      { test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader
    ]
  }
}