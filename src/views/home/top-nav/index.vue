<template>
  <div class="top-nav">
    <div class="top-nav-left">
      <top-nav-left />
    </div>
    <div class="top-nav-right">
      <top-nav-right />
    </div>
  </div>
</template>
<script setup lang="ts">
import TopNavLeft from './top-nav-left/index.vue';
import TopNavRight from './top-nav-right/index.vue';
</script>
<style scoped lang="scss">
.top-nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .top-nav-left {
    display: flex;
    //.top-nav得设置宽高，不然align-items: center;不起作用
    align-items: center;
  }
  .top-nav-right {
    display: flex;
    align-items: center;
  }
}
</style>
