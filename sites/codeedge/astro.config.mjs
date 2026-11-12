// @ts-check
import { defineConfig } from 'astro/config';

// CodeEdge 官网：纯静态，单独部署到 codeedge.mameya.app。
// 颜色、字体、图标组件直接引用主站（仓库根目录的 src/），两边风格保持一致。
export default defineConfig({
  site: 'https://codeedge.mameya.app',
  trailingSlash: 'always',
  build: { format: 'preserve', inlineStylesheets: 'always' },
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
