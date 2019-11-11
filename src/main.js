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


//导入veux
import Vuex from 'vuex'
//挂载到vue上
Vue.use(Vuex)


//创建一个store
//一进来则读取本地存储
let car = JSON.parse(localStorage.getItem('car') || '[]') 
const store = new Vuex.Store({
  state: {
    car
  },
  mutations: {
    //商品详情页面, 点击加入购物车, 调用
    addStoreCar(state, goodsinfo){
      /* 
        当调用我这个方法时, 根据传过来的方法, 判断car中有没有这个商品, 有则把商品的count值相加
        如果没有这个商品这push进car数组中
      */

      //使用假设成立法, 假设没有
      let flag = false

      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          flag = true
          item.count += parseInt(goodsinfo.count)
          return true
        }
      })

      //进入if 则代表没有这个商品
      if (!flag) {
        state.car.push(goodsinfo)
      }

      //把car数据存入本地存储
      localStorage.setItem('car', JSON.stringify(state.car))

    },
    //点击 - + 改变store中的值, 调用的组件把商品的id, 改变后的值传递过来
    updateGoodsCount(state, goodsinfo) {
      //根据id找到对应的商品
      state.car.some( item => {
        if (item.id == goodsinfo.id) {
          item.count = +goodsinfo.count
          return true
        }
      })

      //重新存入本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    //点击删除按钮, 调用mutations方法, 删除car中对应的数据
    removeCar(state,id){
      state.car.some(item => {
        if (item.id == id) {
          let index = state.car.findIndex(item => item.id == id)
          state.car.splice(index, 1)
        }
      })
    },
    //点击开关修改selected
    updateSelected(state, info) {
      console.log(info.selected)
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
          return true
        }
      })

      //重新存入本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    //定义一个类似于计算属性的getters
    getAllCount(state){
      //定义变量
      let count = 0
      state.car.forEach(item => {
        //循环car, 把每一项的count值进行相加
        count += item.count
      })
      //把count相加, 返回出去
      return count
    },

    // 获取每件商品的购物车数量
    getGoodsCount(state){
      const obj = {}
      state.car.forEach(item => {
        obj[item.id] = item.count
      })
      return obj
    },

    //购物车商品的开关按钮状态
    getSelected(state){
      const obj = {}
      state.car.forEach(item => {
        obj[item.id] = item.selected
      })

      return obj
    },

    //获取勾选件数和总价格
    getGoodsPrice(state){
      const obj = {
        count: 0,
        amount: 0
      }
      state.car.forEach(item => {
        if(item.selected) {
          obj.count += item.count,
          obj.amount += item.count * item.price
        }
      })

      return obj
    }
  }
})


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
  store   //挂载状态管理对象
})



