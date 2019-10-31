<template>
  <div>
    <ul class="mui-table-view ">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h3>{{ item.title }}</h3>
            <p class="mui-ellipsis">
              <span>发表时间: {{ item.add_time }}</span>
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
      newsList: [
        {
          id: 1,
          title: '我家小傻子最好看, 最好看呢',
          add_time: Date.now(),
          click: 1,
          img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572518032633&di=03e5dfd0897e72778dbcb080660a4b37&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ffaad29c6643c88d8736be3846c791624725bb492e447-Han5mr_fw658'
        },
          {
          id: 2,
          title: '屁屁虾, 我们走,一起去找男朋友, 哈哈哈哈',
          add_time: '2019-10-31 18:18:18',
          click: 3,
          img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572518032634&di=7c4abcc1f5d6d1bce1cb7e63dfc690ab&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F11%2F20180711132927_QLhNh.thumb.700_0.jpeg',
        },
        {
          id: 3,
          title: '屁屁虾, 我们走,一起去找男朋友, 哈哈哈哈',
          add_time: '2019-10-31 18:18:18',
          click: 10,
          img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572518032633&di=741aef8807e880b47d2fe49b10cc9d6f&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130314%2F11899688_192542628000_2.jpg',
        },
        {
          id: 4,
          title: '我家小傻子最好看, 最好看呢',
          add_time: '2019-10-31 18:18:18',
          click: 20,
          img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572518032633&di=03e5dfd0897e72778dbcb080660a4b37&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ffaad29c6643c88d8736be3846c791624725bb492e447-Han5mr_fw658'
        },
          {
          id: 5,
          title: '屁屁虾, 我们走,一起去找男朋友, 哈哈哈哈',
          add_time: '2019-10-31 18:18:18',
          click: 30,
          img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572518032634&di=7c4abcc1f5d6d1bce1cb7e63dfc690ab&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F11%2F20180711132927_QLhNh.thumb.700_0.jpeg',
        },
        {
          id: 6,
          title: '屁屁虾, 我们走,一起去找男朋友, 哈哈哈哈',
          add_time: '2019-10-31 18:18:18',
          click: 100,
          img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572518032633&di=741aef8807e880b47d2fe49b10cc9d6f&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130314%2F11899688_192542628000_2.jpg',
        },
         {
          id: 7,
          title: '屁屁虾, 我们走,一起去找男朋友, 哈哈哈哈',
          add_time: '2019-10-31 18:18:18',
          click: 100,
          img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572518359737&di=73e183ec8f977427bff4fcb87e8803e6&imgtype=0&src=http%3A%2F%2Fk.zol-img.com.cn%2Fsjbbs%2F6894%2Fa6893336.jpg',
        },
        {
          id: 8,
          title: '屁屁虾, 我们走,一起去找男朋友, 哈哈哈哈',
          add_time: '2019-10-31 18:18:18',
          click: 100,
          img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572518359736&di=6f17deb78884acf7a2e2b063f5d9d1ff&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa09510a6c12d5c2226fb0176a1c79340d6d4c2c3257cc-o6h2P5_fw658',
        },
        {
          id: 9,
          title: '屁屁虾, 我们走,一起去找男朋友, 哈哈哈哈',
          add_time: '2019-10-31 18:18:18',
          click: 100,
          img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572518359735&di=b0d64c9673e7264f94d03a2c6ca8e4d1&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2dbadbd6c32d3327825a8970fc4d9548b09bf0fd46c3a-7JeVna_fw658',
        },
      ]
    }
  },
  created(){
    // this.getNewsList()
  },
  methods: {
   /*  getNewsList(){
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
    } */
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

