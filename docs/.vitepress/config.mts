import { defineConfig } from 'vitepress'
const base = "/blog/"; // github的仓库名 

// https://vitepress.dev/reference/site-config
// defineConfig 是 VitePress 提供的配置函数
// 用来返回一个 VitePress 配置对象
export default defineConfig({
  base,
  title: "HC的文档网站",  // 站点的标题，通常显示在浏览器标签上
  description: "HC的文档网站", // 站点的描述，用于 SEO 或浏览器预览
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
     // 配置网站顶部的导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'test', link: '/api-examples.md' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
  
    // 配置侧边栏
    sidebar: [
      {
        text: 'Examples',
        items: [  // 侧边栏的路径和对应的页面链接
          { text: 'Markdown 样式', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
