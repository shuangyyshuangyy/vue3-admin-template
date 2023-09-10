import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; //引入svg需要用到的插件
import path from 'path'; //‘path’是node平台提供的一个模块，可以获取到某个文件和文件夹的路径（相对、绝对）
import { viteMockServe } from 'vite-plugin-mock';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled: command === 'serve',
      }),
      AutoImport({
        imports: ['vue'],
        resolvers: [ElementPlusResolver()],
        dts: './auto-imports.d.ts',
      }),
      Components({
        dirs: ['src/views'],
        resolvers: [ElementPlusResolver()],
        extensions: ['vue'],
        dts: './components.d.ts',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    //scss全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/globalVariable.scss";',
        },
      },
    },
  };
});
