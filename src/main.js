//入口文件
import Vue from 'vue'
// import './lib/mui/js/mui.js' 按需导入
//导入app组件
import app from './App.vue'


// //按需导入 mint-ui组件
// import {Header, Tabbar, TabItem, Swipe, SwipeItem, Button} from 'mint-ui'
// //手动安装组件 
// Vue.component(Header.name, Header) 
// Vue.component(Tabbar.name, Tabbar)
// Vue.component(TabItem.name, TabItem)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// //懒加载组件
// import { Lazyload } from 'mint-ui'
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//1-1 导入路由
import VueRouter from 'vue-router'
//1-2手动安装
Vue.use(VueRouter)

//导入路由
import router from './router'


//导入样式
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//全局配置, 在main.js中定义 必须在vue-resource 安装后面定义
Vue.http.options.root = 'http://www.liulongbin.top:3005'
//配置表单的提交格式
Vue.http.options.emulateJSON = true 
// 格式化时间插件
import moment from 'moment' 

//缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


//全局过滤器格式化时间 
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})



const vm = new Vue({
  el: '#app',
  render: c => c(app),
  router, //1-4 在app组件中挂载路由
})



