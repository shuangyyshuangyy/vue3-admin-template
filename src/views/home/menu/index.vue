<template>
  <el-scrollbar class="scrollbar">
    <!-- 菜单组件-->
    <el-menu
      background-color="transparent"
      text-color="black"
      active-text-color="yellowgreen"
      :default-active="route.path"
      :default-openeds="unfoldMenuIndexArr"
      router
      :collapse="navStore.foldFlag"
    >
      <!--根据路由动态生成菜单-->
      <template v-for="item in menuList" :key="item.path">
        <!--没有子路由-->
        <el-menu-item v-if="!item.children" :index="item.path">
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <!-- 直接写{{ item.meta.title }}，collapse时有问题 -->
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>

        <!-- 有子路由  -->
        <el-sub-menu v-else :index="item.path">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon" />
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <!-- 递归组件 -->
          <Menu :menuList="item.children" style="padding-left: 15px" />
        </el-sub-menu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>
<script setup lang="ts">
//  递归组件得引入
import { useRoute } from 'vue-router';
import Menu from './index.vue';
import { useNavStore } from '@/store/modules/use-nav-store';

defineProps(['menuList']);
const route = useRoute();
// console.log('route', route, route.path);
const unfoldMenuIndexArr = reactive<string[]>([]);
route.path.split('/').forEach((item) => {
  if (item) unfoldMenuIndexArr.push('/' + item);
});
// console.log('unfoldMenuIndexArr', unfoldMenuIndexArr);

const navStore = useNavStore();
</script>
<style scoped lang="scss">
.scrollbar {
  width: 100%;
  // 不能给高度，会出问题
  // height: calc(100vh - $menu-logo-height);
}
</style>
