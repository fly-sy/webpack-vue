
// es6 的语法  
// import './css/index.less'

// es5 的语法  
// require('./css/index.less')



// es6 提供的 class类 
// class Person {

//   static info = {
//     name: 'fly'
//   }
// }

// const person = new Person()


// const App = {
//   template: '<div>login</div>'
// }


// .vue 既是组件 也是模块     

// 暴露的方式  module.export    exports default  

// 引入的方式  const 自定义模块名 = require('引入的模块')  import 自定义模块名 from '模块'

// 当前引入的是阉割版的 vue   dist/vue.runtime.common.js  不是最完成的   
// script引入的是完整版的  vue.js  vue.min.js  

import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  // components: {
  //   App
  // }

  render: c => c(App)
})



// 在webpack中使用 .vue 文件  

// 1. 实力属性里面的渲染方式必须使用 render    

// 2. 组件必须定义为 .vue    

  //  template  

  //  script   

  //  style   
