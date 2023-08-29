import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
//将应用程序的状态保存到本地存储中，以便在用户关闭浏览器或者重新加载页面后，应用程序的状态仍然可以被恢复。
//这对于需要保存用户偏好设置、表单数据、主题设置等应用程序状态的应用程序非常有用。
pinia.use(piniaPluginPersistedstate);

export default pinia;
