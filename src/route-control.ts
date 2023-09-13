import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import router from './router';

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  nprogress.start();
  next();
});
router.afterEach((to, from) => {
  // to and from are both route objects.
  nprogress.done();
});
