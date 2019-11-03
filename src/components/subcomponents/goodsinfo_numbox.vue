<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" @change="countChange"/>
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChange(){
      let count = mui('.mui-numbox').numbox().getValue()
      this.$emit('getCount', count)
    }
  },
  props: ['max'],
  watch: {
    max: function(newValue, oldValue) {
      mui('.mui-numbox').numbox().setOption('max',newValue)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>