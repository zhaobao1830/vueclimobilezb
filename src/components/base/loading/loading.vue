<template>
  <div class="loading">
    <div class="loading-content">
      <img width="50" height="50" src="./loading.gif">
      <p class="desc">{{title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data() {
      return {
        title: '正在载入...'
      }
    },
    methods: {
      setTitle(title) {
        this.title = title
      }
    }
  }
</script>

<style scoped lang="scss">
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 10;
    .loading-content {
      text-align: center;
      .desc {
        line-height: 20px;
        font-size: $font-size-small;
        color: $color-text-l;
      }
    }
  }
</style>
