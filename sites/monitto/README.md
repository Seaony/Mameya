# Monitto 官网

`monitto.mameya.app`，Monitto 的官网。Astro 纯静态，单独部署成 Cloudflare Worker `monitto`。结构和 `sites/diskit/` 一样。

- 颜色、字体、图标组件、主题按钮直接引用主站（仓库根目录的 `src/styles/global.css`、`src/components/Icon.astro`、`src/components/ThemeToggle.astro`、`src/data/icons.ts`），两边风格一致；官网自己的样式在 `src/styles/site.css`。
- 文案都在 `src/content.ts`，取自 Monitto 仓库的 `README.md` 和 `README.zh-CN.md`。Monitto 的 README 改了，这里要跟着改。
- 结尾的作者卡片直接用主站的个人信息和产品列表（`src/i18n/ui.ts`、`src/data/apps.ts`），主站改了这里自动跟着变。
- 宣传主图、App 图标、网站图标和分享图都从 Monitto 仓库生成：`node sites/monitto/scripts/prepare-assets.mjs`（Monitto 仓库需要在 `~/code` 下）。宣传主图只有英文深色一张，中英文页面共用，分享图也共用一张。

在仓库根目录运行：

```sh
npm run dev:monitto      # 本地开发
npm run build:monitto    # 构建到 sites/monitto/dist
npm run deploy:monitto   # 构建并部署到 monitto.mameya.app
```
