<template>
  <div class="goodsmore-container">
    <h4>{{ info.title }}</h4>

    <hr>

    <div v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      info: {}
    }
  },
  created(){
    this.getInfo()
  },
  methods: {
    getInfo(){
      this.$http.get('api/goods/getdesc/' + this.$route.params.id).then(result => {
        if (result.body.status === 0) {
          this.info = result.body.message[0]
        }
      })
    }
  }
}
</script>

<style lang="scss">
.goodsmore-container {
  padding: 5px;
  h4 {
    font-size: 14px;
    line-height: 40px;
    color: #26A2FF;
    text-align: center;
  }

  img {
    width: 100%;
  }
}
</style>