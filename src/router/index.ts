import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(
    //在变量名前加下划线，表示这个变量是有意未使用的
    //即将进入的路由
    _to: any,
    //当前离开的路由
    _from: any,
    savedPosition: { left: number; top: number } | null,
  ): {
    left: number;
    top: number;
  } {
    // savedPosition 会在你使用浏览器前进或后退按钮时候生效
    // 这个跟你使用 router.go() 或 router.back() 效果一致
    if (savedPosition) {
      return savedPosition;
    } else {
      // 如果不是通过上述行为切换组件，就会让页面回到顶部
      return {
        left: 0,
        top: 0,
      };
    }
  },
});

export default router;
