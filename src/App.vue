<template>
  <router-view></router-view>
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
