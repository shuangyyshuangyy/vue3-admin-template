import SvgIcon from './src/components/SvgIcon/index.vue';

declare module 'vue' {
  export interface GlobalComponents {
    SvgIcon: typeof SvgIcon;
  }
}
