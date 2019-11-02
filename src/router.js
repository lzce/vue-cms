import VueRouter from 'vue-router'

//引入tatbar组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photo/PhotoList.vue'
import PhotoInfo from './components/photo/PhotoInfo.vue'

// 1-3 配置路由对象
let router = new VueRouter({
  routes: [ //配置路由规则
    {path: '/', redirect:'/home'},
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopCarContainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newsList', component: NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo},
    {path: '/home/photoList', component: PhotoList},
    {path: '/home/photoinfo/:id', component: PhotoInfo}
  ],
  linkActiveClass: 'mui-active' //修改默认当前路由高亮的类, 改为mui写好的类
})

//导出路由对象
export default router