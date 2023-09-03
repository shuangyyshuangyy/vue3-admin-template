<template>
  <div class="logo" v-if="setting.logoDisplay">
    <img :src="setting.logoImg" alt="logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
//引入设置标题与logo这配置文件
import setting from '@/setting.ts';
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $menu-logo-height;
  color: #0c0b0bf6;
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
