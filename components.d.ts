import SvgIcon from './src/components/SvgIcon/index.vue';
//解决vue3 + ts全局注册组件没有类型提示的问题
declare module 'vue' {
  export interface GlobalComponents {
    SvgIcon: typeof SvgIcon;
  }
}

// 文件components.d.ts是一个TypeScript声明文件，用于声明组件的类型和接口
// 它可以帮助我们获得类型检查和自动补全的支持，从而提高代码的可维护性和可读性
