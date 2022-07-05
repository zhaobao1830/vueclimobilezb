<template>
  <div class="home">
    我是首页
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
