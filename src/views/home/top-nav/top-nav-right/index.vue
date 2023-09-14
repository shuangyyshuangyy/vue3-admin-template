<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="() => navStore.refresh++"
  />
  <el-button size="small" icon="FullScreen" circle @click="handleFullScreen" />
  <el-button size="small" icon="Setting" circle />
  <img :src="userStore.avatar" />
  <el-dropdown style="margin: 15px">
    <span>
      {{ userStore.username }}
      <el-icon style="vertical-align: top">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { useNavStore } from '@/store/modules/use-nav-store';
import { useUserStore } from '@/store/modules/use-user-store';
import { useRoute, useRouter } from 'vue-router';

const navStore = useNavStore();
const userStore = useUserStore();

onMounted(() => {
  userStore.getUserInfo();
});

const handleFullScreen = () => {
  const fullScreenEl = document.fullscreenElement;
  // console.log('fullSceenEl', fullScreenEl);
  fullScreenEl
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen();
};

const $router = useRouter();
const $route = useRoute();
const logout = async () => {
  await userStore.userLogout();
  //redirect保存退出登录时的路由路径
  $router.push({ path: '/login', query: { redirect: $route.path } });
};
</script>
<style scoped>
img {
  width: 24px;
  height: 24px;
  margin-left: 12px;
  border-radius: 50%;
}
</style>
