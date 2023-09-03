<template>
  <div class="container">
    <!-- 左侧菜单 -->
    <div class="leftMenu">
      <Logo></Logo>
      <Menu :menuList="menuList"></Menu>
    </div>
    <!-- 右侧区域 -->
    <div class="right">
      <div class="top"></div>
      <div class="main">
        <Main></Main>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from './logo/index.vue';
import Main from './main/index.vue';
import Menu from './menu/index.vue';
import { useUserStore } from '@/store/modules/use-user-store';
const userStore = useUserStore();
const menuList = userStore.routes.filter((item) => item.meta.hidden === false);
</script>
<style scoped lang="scss">
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: pink;
  .leftMenu {
    width: $left-menu-width;
    height: 100vh;
    background: rgba(255, 255, 255, 0.918);
  }
  .right {
    width: calc(100vw - $left-menu-width);
    height: 100vh;
    .top {
      width: 100%;
      height: $right-top-height;
      background: #20cc98;
    }
    .main {
      width: 100%;
      height: calc(100vh - $right-top-height);
      background: #410fca;
      padding: 20px;
      // 当元素的内容超出了其指定的高度或宽度时，会出现溢出现象。`overflow: auto;` 可以让元素自动显示滚动条，以便用户可以滚动查看溢出的内容。
      overflow: auto;
    }
  }
}
</style>
