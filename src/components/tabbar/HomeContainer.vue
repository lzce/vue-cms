<template>
  <div>
   
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src="../../images/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoList">
          <img src="../../images/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </router-link>
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
import swiper from '../subcomponents/lunbotu.vue'

export default {
  data: function() {
    return {
      lunbotuList: []
    }
  },
  created() {
    this.getLunbo();
  },
  methods: {
    //获取轮播图数据
    getLunbo() {
      this.$http.get("api/getlunbo").then(result => {
        console.log(result);
        if (result.body.status === 0) {
          // 成功  -> 拿到数据将数据存到data身上
          this.lunbotuList = result.body.message;
          // console.log(result.body)
        } else {
          //失败
          Toast("获取轮播图数据失败")
        }
      });
    }
  },
  components:{
    swiper
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

</style>
