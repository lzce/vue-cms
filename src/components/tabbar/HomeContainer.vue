<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- v-for循环渲染data数组中的数据 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src="../../images/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt />
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data: function() {
    return {
      lunbotuList: [
        {
          img:
            "http://www.itcast.cn/images/newslide/homepageandphone/20191417101436641.jpg",
          url:
            "http://www.itcast.cn/images/newslide/homepageandphone/20191417101436641.jpg"
        },
        {
          img:
            "http://www.itcast.cn/images/newslide/homepageandphone/20195625095605745.jpg",
          url:
            "http://www.itcast.cn/images/newslide/homepageandphone/20195625095605745.jpg"
        },
        {
          img:
            "http://www.itcast.cn/images/newslide/homepageandphone/2019512509512943.jpg",
          url:
            "http://www.itcast.cn/images/newslide/homepageandphone/2019512509512943.jpg"
        }
      ]
    };
  },
  created() {
    // this.getLunbo();
  },
  methods: {
    //获取轮播图数据
    /*     getLunbo () {
      this.$http.get('api/getnewslist').then(result => {
        console.log(result)
        if (result.body.status === 0) {
        // 成功  -> 拿到数据将数据存到data身上 
          this.lunbotuList = result.body.message
        } else {
          //失败
          Toast('获取轮播图数据失败')
        }
      })
    } */
  }
};
</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  .mui-table-view-cell {
    border: none;

    .mui-media-body {
      font-size: 12px;
    }

    img {
      width: 60px;
      height: 60px;
    }
  }
}
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }

    &:nth-child(1) {
      background-color: aqua;
    }
    &:nth-child(2) {
      background-color: blueviolet;
    }
    &:nth-child(3) {
      background-color: plum;
    }
  }
}
</style>
