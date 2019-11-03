<template>
  <div>
     <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- v-for循环渲染data数组中的数据 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt :class="{full: isfull}"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props: ['lunbotuList', 'isfull']
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;
    img {
     
      height: 100%;
    }

   
  }
}
.full {
   width: 100%;
}
</style>