<template>
  <div class="home">
    <van-button type="primary">我是首页按钮</van-button>
    <van-form
      ref="homeFormRef"
      @submit="formSubmit"
    >
      <van-field
        v-model="name"
        name="name"
        label="姓名"
        :rules="[{required: true, message: '请填写姓名'}]"
      />
      <van-field
        v-model="age"
        name="age"
        label="年龄"
        :rules="[{required: true, message: '请填写年龄'}]"
      />
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </van-form>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { computed, ref } from 'vue'

  const store = useStore()
  const playlist = computed(() => store.getters.currentSong)

  console.log(playlist)

  const homeFormRef = ref(null)
  const name = ref('')
  const age = ref('')

  function formSubmit() {
    const ref = homeFormRef.value
    ref.validate().then(() => {
      console.log('校验成功')
    })
      .catch(() => {
        console.log('校验失败')
      })
  }
</script>

<style scoped lang="scss">
  .ruler-demo{
    width: 360px;
  }
</style>
