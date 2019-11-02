<template>
  <div class="comment-container">
    <h3>发表评论</h3>


    <textarea placeholder="请输入要BB的内容(最大长度120字)" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="com-list">
      <div class="com-item" v-for="(item, i) in comments" :key="item.id">
        <div
          class="com-title"
        >第{{ i + 1 }}楼 &nbsp;&nbsp; 用户: {{ item.user_name }} &nbsp;&nbsp; 发表时间: {{ item.add_time | dateFormat }}</div>
        <div class="com-body">{{ item.content === 'undefined' ? '这个用户很懒,什么都没说' : item.content }}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { get } from "http";
export default {
  data() {
    return {
      pageindex: 1,
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(res => {
          if (res.body.status === 0) {
            this.comments = this.comments.concat(res.body.message);
          } else {
            Toast("获取评论失败");
          }
        });
    },
    getmore() {
      this.pageindex++;
      this.getComment();
    },
    postComment() {
      //校验非空
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空");
      }

      //发送ajax
      this.$http
        .post("api/postcomment/" + this.$route.params.id, { content: this.msg })
        .then(result => {
          if (result.body.status === 0) {
            let comment = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg
            };
            //追加到评论的数组中
            this.comments.unshift(comment)
          } else {
            Toast("评论提交失败")
          }
        })
    }
  },
  props: ["id"]
};
</script>

<style lang="scss">
.comment-container {

  > h3 {
    font-weight: 700;
    font-size: 16px;
    color: #237;
  }
  > textarea {
    margin-top: 5px;
  }
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