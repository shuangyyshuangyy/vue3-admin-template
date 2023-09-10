import { createApp } from 'vue';
import App from '@/App.vue';
//svg插件需要配置代码
import 'virtual:svg-icons-register';
import gloablComponent from '@/components/index.ts';
import '@/styles/index.scss';
import router from './router';
import pinia from './store';

const app = createApp(App);
app.use(gloablComponent).use(router).use(pinia);

app.mount('#app');
// console.log(import.meta.env);
