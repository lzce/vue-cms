<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <mt-header fixed title="前端vue项目">
      <span class="goback" slot="left" @click="goback" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 中间路由部分 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部tab部分 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-lzc" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-lzc" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-lzc" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-lzc" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>

export default {

  data(){
    return {
      flag: true
    }
  },
  created(){
    this.falg = this.$route.path === '/home'? false : true
  },
  methods: {
    goback(){
      this.$router.go(-1)
    }
  },
  watch: {
    '$route'(to, from){
      // console.log(to, from)
      if (to.path === '/home') {
        this.flag = false
      } else {
        this.flag = true
      }
    }
  }


};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;

  .goback {
    .mint-header .mint-button {
      height: 30px;
    }
  }
}

.mint-header.is-fixed {
  z-index: 99;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

// 解决tabbar路由失效的问题
.mui-bar-tab .mui-tab-item-lzc.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-lzc {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-lzc .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-lzc .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>