// @ts-check
import { defineConfig } from 'astro/config';

// 纯静态输出，部署到 Cloudflare Workers 静态资源，不需要适配器
export default defineConfig({
  site: 'https://mameya.app',
  trailingSlash: 'always',
  // 输出路径和源文件一致：zh/404.astro → zh/404.html，Workers 才能给 /zh/ 下的路径返回中文 404
  build: { format: 'preserve' },
  i18n: {
    locales: ['en', 'zh', 'ja'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
