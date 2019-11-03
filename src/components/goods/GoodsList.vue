<template>
  <div class="goodslist-container">
    <!-- 这是图片列表部分 -->
    <div class="goods-list">
      <!-- <router-link class="goods-item" v-for="item in goodsList" :key="item.id" :to="'/home/goodsinfo/'+ item.id" tag="div">
        <img :src="item.img_url" alt="">
        <div class="info">
          <h3 class="title">{{ item.title }}</h3>
          <div class="price">
            <span class="new">¥{{ item.sell_price }}</span>
            <span class="old">¥{{ item.market_price }}</span>
          </div>
          <div class="hot">
            <span>热卖中</span>
            <span>剩余{{ item.stock_quantity }}件</span>
          </div>
        </div>
      </router-link> -->

        <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goGoodsinfo(item.id)">
        <img :src="item.img_url" alt="">
        <div class="info">
          <h3 class="title">{{ item.title }}</h3>
          <div class="price">
            <span class="new">¥{{ item.sell_price }}</span>
            <span class="old">¥{{ item.market_price }}</span>
          </div>
          <div class="hot">
            <span>热卖中</span>
            <span>剩余{{ item.stock_quantity }}件</span>
          </div>
        </div>
      </div>


      <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      goodsList: [], // 商品列表数据
      pageIndex: 1,
    }
  },
  created(){
    //调用渲染数据
    this.getGoodsList()
  },
  methods: {
    // 发送ajax, 拿数据
    getGoodsList(){
      this.$http.get('api/getgoods?pageindex=' + this.pageIndex).then(result => {
        if (result.body.status === 0) {
          this.goodsList =  this.goodsList.concat(result.body.message) 
          console.log(this.goodsList)
        }
      })
    },
    //获取更多的点击事件
    getmore(){
      this.pageIndex++
      this.getGoodsList()
    },
    //编程式导航
    goGoodsinfo(id) {
      this.$router.push('/home/goodsinfo/'+ id)
    }
  }
}
</script>

<style lang="scss" scoped>
.goodslist-container {
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;

    .goods-item {
      width: 49%;
      min-height: 293px;
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #ccc;
      margin-bottom: 8px;
      padding: 5px;

      img {
        width: 100%; 
        min-height: 166.5px;
      }

      .info {
        font-size: 12px;
        .title {
          font-size: 14px;
          font-weight: 600;
          min-height: 60px;
          color: #444;
          line-height: 20px;
        }
        .price {
          min-height: 30px;
          .new {
            color: #f10215;
            font-weight: 700;
            font-size: 14px;
          }
          .old {
            text-decoration: line-through;
            margin-left: 5px;
            color: #333;
          }
        }
        .hot {
          display: flex;
          justify-content: space-between;
          color: #333;
        }
      }
    }
  }
}
</style>