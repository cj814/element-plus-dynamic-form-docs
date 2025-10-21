import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { markdownTabPlugin } from '@vuepress/plugin-markdown-tab'

export default defineUserConfig({
  title: 'element-plus-dynamic-form',
  description: '基于 Element Plus 的动态表单/动态表格',
  base: '/pages/',
  theme: defaultTheme({
    sidebar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '快速开始',
        link: '/get-started.html',
      },
      {
        text: 'FormRender',
        link: '/form-render.html',
      },
      {
        text: 'BaseTable',
        link: '/base-table.html',
      },
    ],
  }),

  bundler: viteBundler({
    viteOptions: {
      plugins: [
        vueJsx()
      ],
      build: {
        // 增加chunk大小警告限制，避免大型依赖的警告
        chunkSizeWarningLimit: 1000
      }
    }
  }),

  plugins: [
    markdownTabPlugin({
      // 启用代码选项卡
      codeTabs: true,
      // 启用选项卡
      tabs: true,
    }),
  ],
})
