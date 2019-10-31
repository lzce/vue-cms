<template>
  <div class="comment-container">
    <h3>发表评论</h3>

    <div class="line"></div>

    <textarea placeholder="请输入要BB的内容(最大长度120字)" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="com-list">
      <div class="com-item" v-for="(item, i) in comments" :key="item.id">
        <div class="com-title">第{{ i + 1 }}楼 &nbsp;&nbsp; 用户: {{ item.user_name }} &nbsp;&nbsp; 发表时间:2019-10-31</div>
        <div class="com-body">
          {{ item.content }}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { get } from 'http';
export default {
  data() {
    return {
      pageindex: 1,
      comments: []
    }
  },
  created() {
    this.getComment()
  },
  methods: {
    getComment () {
      this.$http.get('api/getcomments/'+ this.newsid+ '?pageindex=' + this.pageindex).then(res => {
        if (res.body.status === 0) {
           this.comments =  this.comments.concat(res.body.message)
        }else {
          Toast('获取评论失败')
        }
      })
    },
    getmore () {
      this.pageindex ++
      this.getComment() 
    }
  },
  props: ['newsid']    
}
</script>

<style lang="scss">
.comment-container {
  .line {
    height: 1px;
    width: 100%;
    background-color: #ccc;
  }

  .com-list {
    .com-item {
      margin-top: 5px;
      font-size: 12px;
      border-bottom: 1px solid #ccc;
      .com-title {
        background-color: #dbdbdb;
      }
      .com-body {
        text-indent: 2em;
      }
    }
  }
}
</style>