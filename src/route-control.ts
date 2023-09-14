import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import setting from './setting';
import router from './router';
import { useUserStore } from './store/modules/use-user-store';

//取消旋转圆圈
nprogress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  nprogress.start(); //进度条开始
  const userStore = useUserStore(); //必须写在函数里面
  const token = userStore.token;
  //未登录
  if (!token) {
    if (to.path === '/login') next();
    else next({ path: '/login', query: { redirect: to.path } }); //redirect保存未登录时想去未去成的地方
  } else {
    //登录成功
    if (to.path === '/login') next({ path: from.path });
    else next();
  }
});

router.afterEach((to, _from) => {
  nprogress.done(); //进度条结束
  document.title = setting.title + '-' + to.meta.title;
});
