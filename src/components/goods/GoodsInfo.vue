<template>
  <div class="goodsinfo-container">

    <!-- 动画小球 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="ball" v-show="flagball" ref="ball"></div>
    </transition>

    <!-- 轮播部分 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 轮播图子组件 -->
          <swiper :lunbotuList="lunbotuList" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card goodsinfo-price">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            现价:
            <span class="new">¥{{ goodsinfo.sell_price }}</span>
            原价:
            <del class="old">¥{{ goodsinfo.market_price }}</del>
          </p>
          <div class="numbox">
            购买数量:
            <numbox @getCount="getSelectCount" :max="goodsinfo.stock_quantity"></numbox>
          </div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>


    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号: {{ goodsinfo.goods_no }}</p>
          <p>库存情况: {{ goodsinfo.stock_quantity }}</p>
          <p>上架时间: {{ goodsinfo.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" plain  size="large" @click="getmore(id)">图文介绍</mt-button>
        <mt-button plain type="danger" size="large" @click="getComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponents/lunbotu.vue";
import numbox from "../subcomponents/goodsinfo_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotuList: [], 
      goodsinfo: {}, 
      flagball: false,
      selectCount: 1,  //数字钟输入框的值, 子组件向父组件传递的值
    };
  },
  created() {
    this.getlunboList(); //将获取轮播图数据
    this.getGoodsInfo(); //获取商品详情数据
  },

  methods: {
    // 获取轮播图数据
    getlunboList() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotuList = result.body.message;
        }
      });
    },

    // 获取商品详情的图文介绍
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0];
        }
      });
    },
    //图文介绍
    getmore(id) {
      this.$router.push({name: 'goodsmore', params: {id}})
    },
    //获取评论
    getComment(id) {
      this.$router.push({name: 'goodscomment', params: {id}})
    },
    //点击就如购物车, 显示隐藏小球
    addShopCar(){
      this.flagball = !this.flagball
    },

    // 小球半场动画的钩子函数
    beforeEnter(el){
      el.style.transform = 'translate(0, 0)'
    },
    enter(el, done) {
      //获取小球和底部购物车小红点的位置对象
      const ballPosition = this.$refs.ball.getBoundingClientRect()
      const badgePosition = document.querySelector('#badge').getBoundingClientRect()

      //相减求出transfrom的x,y的值
      const x = badgePosition.left - ballPosition.left
      const y = badgePosition.top - ballPosition.top

      el.offsetWidth
      el.style.transform = `translate(${x}px, ${y}px)`
      el.style.transition = 'all .5s cubic-bezier(.4,-.5,.8,1)'
      done()
    },
    afterEnter(el) {
      this.flagball = !this.flagball
    },

    //父组件定义方法传递给子组件
    getSelectCount(count){
      this.selectCount = count
      // console.log('这是父组件需要的值',this.selectCount)
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  overflow: hidden;
  position: relative;

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }

  .goodsinfo-price {
    .mui-card-content-inner {
      .price {
        font-size: 13px;
        .new {
          color: red;
          font-weight: 700;
          font-size: 15px;
        }
        .old {
          font-size: 13px;
          // margin-left: 10px;
        }
      }

      .numbox {
        margin-bottom: 15px;
      }

      p:nth-of-type(2) {
        button:nth-of-type(2) {
          margin-left: 10px;
        }
      }
    }
  }

  .ball {
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    top: 367px;
    left: 142px;
    z-index: 99;
    // transform: translate(88px, 185px)
  }
}
</style>