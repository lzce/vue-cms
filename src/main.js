//入口文件
import Vue from 'vue'
// import './lib/mui/js/mui.js'

//按需导入 mint-ui组件
import {Header, Tabbar, TabItem } from 'mint-ui'


//手动安装组件
Vue.component(Header.name, Header) 
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

//导入app组件
import app from './App.vue'

//导入样式
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'


const vm = new Vue({
  el: '#app',
  render: c => c(app),
})



