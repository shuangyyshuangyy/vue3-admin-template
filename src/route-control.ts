import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import setting from './setting';
import router from './router';

//取消旋转圆圈
nprogress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  nprogress.start();
  next();
});
router.afterEach((to, from) => {
  // to and from are both route objects.
  nprogress.done();
  document.title = setting.title + '-' + to.meta.title;
});
