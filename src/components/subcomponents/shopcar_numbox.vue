<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1" :data-numbox-max="max" style="height: 27px">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" @change="countChange" :value="initCount" ref="numbox"/>
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  // 初始化插件
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    // 数量改变则就像父组件传值
    countChange(){
      this.$store.commit('updateGoodsCount', {id: this.goodsId, count: this.$refs.numbox.value})  
    }
  },
  props: ['max', 'initCount', 'goodsId'],
  watch: {
    max: function(newValue, oldValue) {
      // mui('.mui-numbox').numbox().setOption('max',newValue)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>