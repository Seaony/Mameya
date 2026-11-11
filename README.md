# Mameya

`mameya.app` 根域名上的个人主页：我是谁、在做的产品、怎么联系我。英文在 `/`，中文在 `/zh/`，日文在 `/ja/`。

Astro 纯静态输出，部署到 Cloudflare Workers 静态资源（`wrangler.jsonc`，不用适配器）。

## 常用命令

```sh
npm run dev                 # 本地开发
npm run build               # 输出到 dist/
npx wrangler dev            # 用 Workers 本地运行 dist/（和线上一样的 404 处理）
npx astro check             # 类型检查
```

## 改内容

- 文案（三种语言）：`src/i18n/ui.ts`
- 产品列表、链接、联系方式、社交账号：`src/data/apps.ts`
- 产品图标：`node scripts/prepare-icons.mjs`，从 `~/code/<产品>` 里取图标，统一成 macOS 图标模板输出到 `src/assets/apps/`
- 社交二维码：`src/assets/qr/`（只截取码本身，白底）
- 头像：`node scripts/prepare-avatar.mjs <图片路径>`，同时生成 favicon 和苹果触屏图标；换完再跑一次分享图
- 分享图：`node scripts/make-og.mjs`，用本机 Chrome 生成 `public/og/<lang>.png`

## 结构

```
src/
  pages/            index、404 各三种语言；sitemap.xml
  layouts/Base.astro  <head>、SEO、主题和语言的内联脚本
  components/       Header、Home、NotFound、Footer
  styles/global.css 颜色 token（亮暗两套）、字体、基础样式
public/
  fonts/            Inter latin 子集（含 ↗），字重 400–600
  _headers          /_astro/ 和 /fonts/ 长期缓存
```

以后加博客：在 `src/pages/`（和 `zh/`、`ja/`）下加 `blog/` 目录即可，现有结构不用动。
