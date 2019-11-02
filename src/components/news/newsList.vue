<template>
  <div>
    <ul class="mui-table-view ">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h3>{{ item.title }}</h3>
            <p class="mui-ellipsis">
              <span>发表时间: {{ item.add_time | dateFormat}}</span>
              <span>发表次数: {{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui' 

export default {

  data () {
    return {
      newsList: []
    }
  },
  created(){
    this.getNewsList()
  },
  methods: {
    getNewsList(){
      //通过接口获取列表信息
      this.$http.get('api/getnewsList').then(result => {
        if (result.body.status === 0) {
          //把数据存data上
          this.newsList = result.body.message
        } else {
          //失败
          Toast('获取数据失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    a {
      h3 {
        font-size: 14px;
      }
      .mui-ellipsis {
        font-size: 12px;
        display: flex;
        color: green;
        justify-content: space-between;
      }
    }
  }
}
</style>

