import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Renderio 的个人博客',
  mode: 'site',
  description: 'Renderio 的个人博客',
  locales: [['zh-CN', '中文']],
  menus: {
    '/article': [
      {
        title: '2021-06',
        children: ['article/20210629'],
      },
    ],
    '/tech': [
      {
        title: '工程化',
        children: ['tech/founda/version'],
      },
    ],
  },
  publicPath: '/blog/',
  base: '/blog/',
});
