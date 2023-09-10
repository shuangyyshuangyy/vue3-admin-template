<template>
  <el-icon style="margin: 15px" @click="handleClick">
    <component :is="navStore.foldFlag ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="item in route.matched"
      :index="item.path"
      :to="item.path"
    >
      <!-- 给el-icon 加style="vertical-align: top" 可以实现同样的效果-->
      <div style="display: flex; align-items: center">
        <el-icon>
          <component :is="item.meta.icon" />
        </el-icon>
        <span style="margin-left: 5px">
          {{ item.meta.title }}
        </span>
      </div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { useNavStore } from '@/store/modules/use-nav-store';
import { useRoute } from 'vue-router';
// import { ref } from 'vue';
const navStore = useNavStore();
const handleClick = () => {
  navStore.foldFlag = !navStore.foldFlag;
};

const route = useRoute();
// console.log('route', route);
</script>
<style scoped></style>
