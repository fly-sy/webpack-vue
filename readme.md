
## 一、什么是Webpack


WebPack可以看做是**模块打包机**：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。 

## 二、webpack4.x基本使用 

### 本地使用（全局环境）

   npm install webpack webpacl-cli -g  (webpack4.0 的一个依赖项)

   装好之后可以可以直接在项目根目录使用 webpack 运行打包项目   

   PS: webpack4.0 采用约定大于配置的方式进行定义 ，详细的项目目录看`项目使用`方式

### 项目使用  

#### 1. 初始化  

  npm init -y

#### 2. 约定的项目结构  
```
  + dist 

  + src  

    + index.html

    + index.js    

  + package.json   

  + webpack.config.js （可选），还是建议使用   
```

#### 3. webpack.config.js 配置的一些改变  

  1. 不需要设定入口文件和出口文件  

  2. 引入了模式 mode 可以快速切换 

    + 开发环境（development）
    
    + 上线环境（production）

#### 4. 安装2个webpack核心包  

  npm|cnpm install webpack webpack-cli -D  |  yarn add webpack webpack-cli -D  

#### 5. 安装webpack-dev-server把main.js生成在内存中

+ npm install webpack-dev-server -D  

+ 在package的scripts属性上配置脚本

```
  "scripts": {
    "dev": "webpack-dev-server --open --port 8080 --hot"
  }
```
#### 6. html-webpack-plugin 配置 （把index.html生成在内存中）

1. 安装 html-webpack-plugin 

  yarn add html-webpack-plugin -D    

2. 在webpack.config.js 中配置plugins  

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
    
    ps: 配置 html-webpack-plugin 可以自动把打包好的main.js添加到index.html中   
  ```
#### 7、使用webpack使用css 、less  

webpack默认只支持js的模块化，如果需要把其他文件也当成模块引入，就需要相对应的loader解析器

1. 安装依赖包
  
  yarn add style-loader css-loader -D 

  yarn add less less-loader -D 

2. 配置规则  

  ```

  // 这段代码意思是：匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析
  { test: /\.css$/, use: ['style-loader', 'css-loader?modules'] }
  
  { test: /\.less$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'less-loader'] } // 打包处理 scss 文件的 loader
  ```
 
 3. 在src目录下新建一个assets/css目录，创建index.css和index.css 样式可以随意定义 

 ```
    body {
      color: red;
      background: url(../images/1.png)
    }

 ```

 4. 在index.js 中引入.css或者.less文件  

  import './assets/css/index.css'
  import './assets/css/index.less'
#### 8、使用babel ​	

ES6的语法大多数浏览器依旧不支持,bable可以把ES6转码成ES5语法，这样我们就可以大胆的在项目中使用最新特性了

1. 安装babel依赖包  
  ```
    yarn add babel-core babel-loader babel-plugin-transform-runtime -D    （核心包）

    yarn add babel-preset-env babel-preset-stage-0  -D  （语言包）
  ```

1. 在webpack.config.js中配置loader 

  ```
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
      ]
    }
  ```
2. 配置 .babelrc 文件 

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

#### 9、配置.vue 文件  

在前面的例子里，我们使用 Vue.component 来定义全局组件，在实际项目里，更推荐使用单文件组件

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

4. 在src目录下新建一个App.vue

  ```
    <template>
      <div class="app">
        app component
      </div>
    </template>

    <script>
    export default {
      data: () => ({})
    };
    </script>

    <style  scoped>
    </style>

  ```

#### 10、配置url

把图片也当成模块引入

1. yarn add file-loader url-loader -D 

2. webpack.config.js添加一个loader

  ```
    { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' }, // 处理 图片路径的 loader

  ```
3. 在src目录下新建一个assets/images目录，存放一张图片1.png

4. 在App.vue 中使用图片  

  ```
    <template>
      <div class="app">
        app component
        <img
          src="./assets/images/1.png"
          alt=""
        >
      </div>
    </template>
    <script>
    export default {
      data: () => ({})
    };
    </script>

    <style  scoped>
    </style>

  ```
## 三、完整配置

https://github.com/fly-sy/webpack-vue

