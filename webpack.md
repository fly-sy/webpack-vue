
## 1、什么是Webpack

WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

less

sass  

url   


html css js img  png  gif   

## 2、webpack4.x基本使用 

### 本地使用（全局环境）

+ npm install webpack webpacl-cli -g  (webpack4.0 的一个依赖项)

+ 装好之后可以可以直接使用 webpack 运行打包项目   

### 项目使用  

1. 初始化  

  + npm init -y

2. 约定的项目结构  

  + dist 

  + src  

    + index.html

    + index.js    

  + package.json   

  + webpack.config.js （可选），还是建议使用   

3. webpack.config.js 配置的一些改变  

  1. 不需要设定入口文件和出口文件  

  2. 引入了模式 mode 可以快速切换 

    + 开发环境（development）
    
    + 上线环境（production）

 4. 2个webpack核心包  
  
    + webpack (核心功能) 

    + webpack-cli （打包功能）

    + npm|cnpm install webpack webpack-cli -D  |  yarn add webpack webpack-cli -D  


###  webpack-dev-server （会把main.js生成在内存中） 

+ npm install webpack-dev-server -D  

+ "webpack-dev-server --open --port 8080 --hot"


### html-webpack-plugin 配置 （把index.html生成在内存中）

1. 配置    

  yarn add html-webpack-plugin -D    
  ```

    const path = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')

    const htmlPlugin = new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })

    module.exports = {
      model: 'development',   //development  production  
      plugins: [
        htmlPlugin
      ]
    }
  ```
2. 作用

  + 把index.html 写在内存中  

  + 自动把打包好的main.js添加到index.html中   


## 3、手动打包和webpack-dev-server帮助打包有什么区别   

+ 手动打包会把文件持久化   

+ webpack-dev-server（没有额外配置的时候）生成在内存中   

ps: webpack 只认得js 不认识js之外的文件，如果你想在webpack中使用别的文件需要使用相应的loader解析  

## 4、使用webpack使用css 、less  

1. 安装依赖包
  
  yarn add style-loader css-loader -D 

  yarn add less less-loader -D 

2. 配置规则  

  ```
  { test: /\.css$/, use: ['style-loader', 'css-loader?modules'] }
  
  { test: /\.less$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'less-loader'] } // 打包处理 scss 文件的 loader
  ```

## 5、babel 基本配置

+ yarn add babel-core babel-loader babel-plugin-transform-runtime -D    （核心包）

+ yarn add babel-preset-env babel-preset-stage-0  -D  （语言包）

+ 在webpack.config.js中配置loader 

  ```
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
      ]
    }
  ```
+ 配置 .babelrc 文件 

  ```
    {
      "presets": [
        "env",      // es的所语法
        "stage-0"  // 指定用哪个版本
      ],
      "plugins": [
        "transform-runtime"  // 在插件的基础上运行   
      ]
    }
  ```

## 6、配置.vue 文件  

1. yarn add vue-loader vue-template-compiler -D 

2. 配置vue-loader规则 

  ```

    module: {
      rules: [
        { test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader
      ]
    }
    
  ```

3. 在webpack.config.js文件中配置vue-loader 插件  

    ```
      const { VueLoaderPlugin } = require('vue-loader')

      plugins: [
        new VueLoaderPlugin()
      ]

    ```

## 7、配置url

1. yarn add file-loader url-loader -D 

2. 配置url-loader 规则 

  ```
    { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' }, // 处理 图片路径的 loader

  ```

## 8、vue-cli 安装   

1. npm install vue-cli -g  

2. vue -V（大写的V）  查看版本   

### 初始化

1. vue init webpack my-project(项目名称可以自己定义)

进入项目根目录     

npm install   

npm run dev   


clear mac 清空  

cls  win7 清空  

