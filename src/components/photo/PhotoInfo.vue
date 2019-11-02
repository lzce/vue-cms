<template>
  <div class="photoinfo-container">
    <h3 class="text-one">{{ photoInfo.title }}</h3>

    <div class="submit">
      <span class="sub-time">发表时间: {{ photoInfo.add_time | dateFormat }}</span>
      <span class="sub-num">点击次数: {{ photoInfo.click }}</span>
    </div>

    <hr />

    <!-- 缩略图部分 -->
    <div class="thumbs">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
    <!-- 评论部分 -->
    <div class="content" v-html="photoInfo.content"></div>

    <!-- 留言子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
//引入子组件
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id, //每一图片列表的id
      photoInfo: {}, // 图片详情渲染需要的数据
      slide1: [] //缩略图
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoInfo = result.body.message[0];
        }
      });
    },
    getThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach((item, i) => {
            item.msrc = item.src;
            item.w = 600;
            item.h = 500;
            item.title = "picture" + i;
          });
          this.slide1 = result.body.message;
        }
      });
    },
    //缩略图方法
    handleClose() {
      console.log("close event");
    }
  },

  components: {
    "cmt-box": comment
  }
};
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 5px;
  h3 {
    text-align: center;
    font-size: 15px;
    color: #26a2ff;
    font-weight: normal;
    height: 40px;
    line-height: 40px;
  }
  .text-one {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .submit {
    display: flex;
    justify-content: space-between;
    .sub-time {
      font-size: 12px;
    }
    .sub-num {
      font-size: 12px;
    }
  }
  .content {
    font-size: 13px;
    line-height: 30px;
    color: #333;
  }
  .thumbs {
    /deep/ .my-gallery {
      display: flex;
      flex-wrap: wrap;
      figure {
        width: 30%;
        margin: 5px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
