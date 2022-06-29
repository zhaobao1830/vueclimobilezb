<template>
  <div class="no-result">
    <div class="no-result-content">
      <div class="icon"></div>
      <p class="text">{{title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'no-result',
    data() {
      return {
        title: '没有找到相关的内容'
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
  .no-result {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    .no-result-content {
      text-align: center;
      .icon {
        width: 270px;
        height: 170px;
        margin: 0 auto;
        @include bg-image('no-result');
        background-size: 270px 170px;
      }
      .text {
        margin-top: 30px;
        font-size: 13px;
        color: #333333;
      }
    }
  }
</style>
