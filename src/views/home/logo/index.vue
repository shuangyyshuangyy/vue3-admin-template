<template>
  <div class="logo" v-if="setting.logoDisplay">
    <img :src="setting.logoImg" alt="logo" style="transform: scale(0.9)" />
    <p v-if="!navStore.foldFlag">{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
//引入设置标题与logo这配置文件
import setting from '@/setting.ts';
import { useNavStore } from '@/store/modules/use-nav-store';
const navStore = useNavStore();
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $logo-height;
  color: #0c0b0bf6;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-top: 15px;
  margin-bottom: 20px;

  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $logo-title-fontSize;
    margin-left: 15px;
  }
}
</style>
