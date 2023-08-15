if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  );
  process.exit(1);
}
// 当我们使用 npm 或者 yarn 来安装包的时候，就会报错了。原理就是在 install 的时候会触发 preinstall（npm 提供的生命周期钩子）这个文件里面的代码。
