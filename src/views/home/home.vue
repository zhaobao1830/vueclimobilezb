<template>
  <div class="home">
    <van-button type="primary">我是首页按钮</van-button>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { computed } from 'vue'

  const store = useStore()
  const playlist = computed(() => store.getters.currentSong)

  console.log(playlist)
</script>

<style scoped lang="scss">

</style>
