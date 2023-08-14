import { createApp } from 'vue';
import App from './App.vue';
//引入element-plus插件和样式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount('#app');
