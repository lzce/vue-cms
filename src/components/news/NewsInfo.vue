<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsInfo.title }}</h3>
    <!-- 子标题 -->
    <div class="subtitle">
      <span>发表时间: {{ newsInfo.add_time }}</span>
      <span>点击次数: {{ newsInfo.click }}次</span>
    </div>

    <div class="line"></div>
    <!-- 内容区域 -->
    <div class="content" v-html="newsInfo.content"></div>

    <!-- 评论区 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
//评论的子组件
import comment from '../subcomponents/comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {}
    }
  },
  created() {
    this.getNewsInfoList()
  },
  methods: {
    getNewsInfoList () {
      this.$http.get('api/getnew/'+ this.id).then(res => {
        this.newsInfo = res.body.message[0]
      })
    }
  },
  components: {
    'comment-box': comment
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 5px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: blueviolet;
  }
  .subtitle {
    color: #ccc;
    font-size: 12px;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
  }
  .content {
    padding: 10px;
    letter-spacing: 3px;
    line-height: 26px;
  }
  .line {
    height: 1px;
    width: 100%;
    background-color: #ccc;
  }
}
</style>

