import SvgIcon from './SvgIcon/index.vue';
import type { App, Component } from 'vue';

const components: { [name: string]: Component } = { SvgIcon };

export default {
  //全局组件注册
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};
