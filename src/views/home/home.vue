<template>
  <div class="home">
    <van-button type="primary">我是首页按钮</van-button>
    <div class="ruler-demo">
      当前值：{{value}}
      <ruler-component
        v-model="value"
        :scope="scope"
        :step="10"
        :unit="1"
      ></ruler-component>
    </div>
  </div>
</template>

<script setup>
  import RulerComponent from '@/components/base/Ruler/RulerComponent'
  import { useStore } from 'vuex'
  import { computed, ref } from 'vue'

  const store = useStore()
  const playlist = computed(() => store.getters.currentSong)

  console.log(playlist)

  const value = ref(10)
  const scope = ref([0, 30])
</script>

<style scoped lang="scss">
  .ruler-demo{
    width: 360px;
  }
</style>
