<template>
  <div>
    <com-box :id="this.$route.params.id"></com-box>
  </div>
</template>

<script>
//评论的组件
import comment from '../subcomponents/comment.vue'

export default {
  components: { 
    "com-box": comment,
  }
}
</script>

<style lang="scss" scoped>

</style>