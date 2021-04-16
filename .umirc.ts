import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Renderio 的个人博客',
  mode: 'site',
  description: 'Renderio 的个人博客',
  locales: [['zh-CN', '中文']],
  menus: {
    '/article': [
      {
        title: '2021-04',
        children: ['article/202104/20210416'],
      },
    ],
    '/tech': [],
  },
});
