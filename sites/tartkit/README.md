# Tartkit 官网

`tartkit.mameya.app`，Tartkit 的官网。Astro 纯静态，单独部署成 Cloudflare Worker `tartkit`。结构和 `sites/diskit/` 一样。

- 颜色、字体、图标组件、主题按钮直接引用主站（仓库根目录的 `src/styles/global.css`、`src/components/Icon.astro`、`src/components/ThemeToggle.astro`、`src/data/icons.ts`），两边风格一致；官网自己的样式在 `src/styles/site.css`。
- 文案和支持的系统列表都在 `src/content.ts`，取自 Tartkit 仓库的 `README.md` 和 `README.zh-CN.md`。Tartkit 的 README 改了，这里要跟着改。文案里用反引号包起来的显示成代码，`[文字](地址)` 显示成链接。
- 结尾的作者卡片直接用主站的个人信息和产品列表（`src/i18n/ui.ts`、`src/data/apps.ts`），主站改了这里自动跟着变。
- 产品图、App 图标、网站图标、分享图，以及各系统的图标（`public/systems/`，App 里同一套，亮暗各一张），都从 Tartkit 仓库生成：`node sites/tartkit/scripts/prepare-assets.mjs`（Tartkit 仓库需要在 `~/code` 下）。Tartkit 加了系统就重跑一次，再在 `src/content.ts` 里补上名字。

在仓库根目录运行：

```sh
npm run dev:tartkit      # 本地开发
npm run build:tartkit    # 构建到 sites/tartkit/dist
npm run deploy:tartkit   # 构建并部署到 tartkit.mameya.app
```
