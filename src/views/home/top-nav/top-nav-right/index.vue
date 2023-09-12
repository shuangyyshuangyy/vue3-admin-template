<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="() => navStore.refresh++"
  />
  <el-button size="small" icon="FullScreen" circle @click="handleFullScreen" />
  <el-button size="small" icon="Setting" circle />
  <el-dropdown style="margin: 15px">
    <span>
      admin
      <el-icon style="vertical-align: top">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { useNavStore } from '@/store/modules/use-nav-store';

const navStore = useNavStore();

const handleFullScreen = () => {
  const fullScreenEl = document.fullscreenElement;
  // console.log('fullSceenEl', fullScreenEl);
  fullScreenEl
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen();
};
</script>
<style scoped></style>
