<template>
  <div class="container">
    <!-- 左侧菜单 -->
    <div class="leftMenu" :class="{ leftFold: navStore.foldFlag }">
      <Logo></Logo>
      <Menu :menuList="menuList"></Menu>
    </div>
    <!-- 右侧区域 -->
    <div class="right" :class="{ rightFold: navStore.foldFlag }">
      <div class="top">
        <top-nav></top-nav>
      </div>
      <div class="main">
        <Main></Main>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useNavStore } from '@/store/modules/use-nav-store';
import { useUserStore } from '@/store/modules/use-user-store';
const userStore = useUserStore();
const menuList = userStore.routes.filter((item) => item.meta.hidden === false);
const navStore = useNavStore();
</script>
<style scoped lang="scss">
.container {
  display: flex;
  //width:100vw有横向进度条
  width: 100%;
  height: 100vh;
  // background: pink;
  .leftMenu {
    width: $left-menu-width;
    height: 100%;
    background: rgba(233, 250, 247, 0.918);
    transition: all 0.5s;
    &.leftFold {
      width: $left-fold-width;
    }
  }
  .right {
    width: calc(100% - $left-menu-width);
    height: 100vh;
    .top {
      width: 100%;
      height: $right-top-height;
      // background: #20cc98;
    }
    .main {
      width: 100%;
      height: calc(100vh - $right-top-height);
      background: #410fca;
      padding: 20px;
      // 当元素的内容超出了其指定的高度或宽度时，会出现溢出现象。`overflow: auto;` 可以让元素自动显示滚动条，以便用户可以滚动查看溢出的内容。
      overflow: auto;
    }
    &.rightFold {
      width: calc(100% - $left-fold-width);
    }
  }
}
</style>
