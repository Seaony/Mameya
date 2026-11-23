# Momento 官网

`momento.mameya.app`，Momento 的官网。Astro 纯静态，单独部署成 Cloudflare Worker `momento`。结构和 `sites/tartkit/` 一样。

- 颜色、字体、图标组件、主题按钮直接引用主站（仓库根目录的 `src/styles/global.css`、`src/components/Icon.astro`、`src/components/ThemeToggle.astro`、`src/data/icons.ts`），两边风格一致；官网自己的样式在 `src/styles/site.css`。
- 文案和支持的格式都在 `src/content.ts`，取自 Momento 仓库的 `README.md` 和 `README.zh-CN.md`。Momento 的 README 改了，这里要跟着改。文案里用反引号包起来的显示成代码，`[文字](地址)` 显示成链接。
- 结尾的作者卡片直接用主站的个人信息和产品列表（`src/i18n/ui.ts`、`src/data/apps.ts`），主站改了这里自动跟着变。
- 主界面截图、App 图标、网站图标、分享图都从 Momento 仓库生成：`node sites/momento/scripts/prepare-assets.mjs`（Momento 仓库需要在 `~/code` 下）。主界面截图不进 Momento 仓库，没有的话先按它的 `design/promo/README.md` 渲染一次；分享图用 README 的主图。

在仓库根目录运行：

```sh
npm run dev:momento      # 本地开发
npm run build:momento    # 构建到 sites/momento/dist
npm run deploy:momento   # 构建并部署到 momento.mameya.app
```
