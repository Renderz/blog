import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Renderio 的个人博客',
  mode: 'site',
  description: 'Renderio 的个人博客',
  locales: [['zh-CN', '中文']],
  publicPath: '/blog/',
  base: '/blog/',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
