<template>
  <div>
    <!-- 顶部滑动导航 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active': '']"
            v-for="item in cates"
            :key="item.id"
            @click="getImgList(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表 -->
    <ul class="img-list">
      <router-link :to="'/home/photoinfo/' + item.id" v-for="item in imgList" :key="item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
          <div class="info-title">{{ item.title }}</div>
          <div class="info-content">
            {{ item.zhaiyao }}
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      cates: [], //图片标题
      imgList: [] // 图片列表
    };
  },
  methods: {
    //获取分类数据
    getCateList() {
      this.$http.get("api/getimgcategory/").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
          console.log(this.cates);
        } else {
          Toast("获取图片列表失败");
        }
      });
    },
    //获取图片列表
    getImgList(cateid) {
      this.$http.get("api/getimages/" + cateid).then(result => {
        if (result.body.status === 0) {
          this.imgList = result.body.message
          console.log(this.imgList)
        }
      })
    }
  },
  created() {
    this.getCateList();
    this.getImgList(0); //默认展示全部
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.img-list {
  padding: 10px;
  padding-bottom: 0;
  margin: 0;
  li {
    background: #ccc;
    text-align: center;
    list-style: none;
    margin-bottom: 10px;
    box-shadow: 0 0 6px #999;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }
    img {
      width: 100%; 
      height: 100%;
      vertical-align: middle;
      
    }

    .info {
      text-align-last: left;
      max-height:  85px;
      position: absolute;
      bottom: 0;
      color: #fff;
      background-color: rgba(0, 0, 0, .4);
      .info-title {
        font-size: 14px;
        font-weight: 700;
      }
      .info-content {
        font-size: 13px;
      }
    }

    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}
</style>