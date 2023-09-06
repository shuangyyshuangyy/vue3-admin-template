<template>
  <el-icon style="margin: 15px" @click="handleClick">
    <component :is="navStore.foldFlag ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { useNavStore } from '@/store/modules/use-nav-store';
// import { ref } from 'vue';
const navStore = useNavStore();
const handleClick = () => {
  navStore.foldFlag = !navStore.foldFlag;
};
</script>
<style scoped></style>
