# Diskit 官网

`diskit.mameya.app`，Diskit 的官网。Astro 纯静态，单独部署成 Cloudflare Worker `diskit`。结构和 `sites/codeedge/` 一样。

- 颜色、字体、图标组件、主题按钮直接引用主站（仓库根目录的 `src/styles/global.css`、`src/components/Icon.astro`、`src/components/ThemeToggle.astro`、`src/data/icons.ts`），两边风格一致；官网自己的样式在 `src/styles/site.css`。
- 文案和支持的位置列表都在 `src/content.ts`，取自 Diskit 仓库的 `README.md` 和 `README.zh-CN.md`。Diskit 的 README 改了，这里要跟着改。
- 结尾的作者卡片直接用主站的个人信息和产品列表（`src/i18n/ui.ts`、`src/data/apps.ts`），主站改了这里自动跟着变。
- 产品图、App 图标、网站图标、分享图，以及各类位置的图标（`public/types/`，App 里同一套，亮暗各一张），都从 Diskit 仓库生成：`node sites/diskit/scripts/prepare-assets.mjs`（Diskit 仓库需要在 `~/code` 下）。Diskit 加了位置类型就重跑一次，再在 `src/content.ts` 里补上名字。

在仓库根目录运行：

```sh
npm run dev:diskit      # 本地开发
npm run build:diskit    # 构建到 sites/diskit/dist
npm run deploy:diskit   # 构建并部署到 diskit.mameya.app
```
