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
    <comment-box :newid="this.id"></comment-box>
  </div>
</template>

<script>
//评论的子组件
import comment from '../subcomponents/comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {
        title: "好看的小傻子",
        click: 100,
        add_time: "2019-10.31 18:18:18",
        content: `<div><p>永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。

        是日也，天朗气清，惠风和畅。仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也。

        夫人之相与，俯仰一世。或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。虽趣舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，不知老之将至；及其所之既倦，情随事迁，感慨系之矣。向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀，况修短随化，终期于尽！古人云：“死生亦大矣。”岂不痛哉！

        每览昔人兴感之由，若合一契，未尝不临文嗟悼，不能喻之于怀。固知一死生为虚诞，齐彭殇为妄作。后之视今，亦犹今之视昔，悲夫！故列叙时人，录其所述，虽世殊事异，所以兴怀，其致一也。后之览者，亦将有感于斯文</p></div>`
      }
    }
  },
  created() {
    // this.getNewsInfoList()
  },
  methods: {
    // getNewsInfoList () {
    //   this.$http.get('api/xxxxx'+ this.id).then(res => {
    //     this.newsInfo = res.body.message[0]
    //   })
    // }
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

