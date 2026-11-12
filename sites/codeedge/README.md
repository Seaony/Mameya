# CodeEdge 官网

`codeedge.mameya.app`，CodeEdge 的官网。Astro 纯静态，单独部署成 Cloudflare Worker `codeedge`。

- 颜色、字体、图标组件、主题按钮直接引用主站（仓库根目录的 `src/styles/global.css`、`src/components/Icon.astro`、`src/components/ThemeToggle.astro`、`src/data/icons.ts`），两边风格一致；官网自己的样式在 `src/styles/site.css`。
- 文案都在 `src/content.ts`，取自 CodeEdge 仓库的 `README.md` 和 `README.zh-CN.md`。CodeEdge 的 README 改了，这里要跟着改。
- 结尾的作者卡片直接用主站的个人信息和产品列表（`src/i18n/ui.ts`、`src/data/apps.ts`），主站改了这里自动跟着变。
- 产品图、App 图标、网站图标、分享图，以及服务商列表（`src/providers.json`）和 logo（`public/providers/`，来自 CodexBar，MIT），都从 CodeEdge 仓库生成：`node sites/codeedge/scripts/prepare-assets.mjs`（CodeEdge 仓库需要在 `~/code` 下）。CodeEdge 加了服务商就重跑一次。

在仓库根目录运行：

```sh
npm run dev:codeedge      # 本地开发
npm run build:codeedge    # 构建到 sites/codeedge/dist
npm run deploy:codeedge   # 构建并部署到 codeedge.mameya.app
```
