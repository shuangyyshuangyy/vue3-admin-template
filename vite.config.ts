import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; //‘path’是node平台提供的一个模块，可以获取到某个文件和文件夹的路径（相对、绝对）

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
    },
  },
});
