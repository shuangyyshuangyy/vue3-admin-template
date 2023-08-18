<template>
  <svg-icon name="lock" color="#0000ff"></svg-icon>
  <div><h1>ssss</h1></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import request from '@/utils/request';

onMounted(() => {
  request({
    url: '/user/login',
    method: 'posts',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((res) => {
    console.log(res);
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
