<template>
  <svg-icon name="lock" color="#0000ff"></svg-icon>
  <div><h1>ssss</h1></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { reqLogin } from '@/api/user/index.ts';

onMounted(() => {
  reqLogin({
    username: 'admin',
    password: '111111',
  }).then((res) => {
    console.log(res.data);
  });
});
</script>
<style scoped lang="scss">
div {
  h1 {
    color: $base-color;
  }
}
</style>
