# Logo 候选

## 现在用的

- Logo：`第1批/L06-clay-hamster.png`（仓鼠抱着一颗鲜绿豆子，软陶 3D 加白描边，暖黄渐变底）。
  - 网站页头、favicon、分享图用的是抠掉背景的版本 `src/assets/brand/logo.png`（247×240）：用 macOS Vision 抠出主体，再把蒙版里的小洞补成不透明。
  - 原图复制在 `正式资源/logo-tile.png`，苹果触屏图标从它生成。
- 之前的 Logo（3D 小提篮装豆子）见 `design/codex-prompts/05-logo-basket-anime.md`。

## 抽卡记录

每批的提示词（`prompts/`）都在对应目录里。候选图太大，只有选中的那张进仓库，其余和对比图只留在本地；本地有候选图时，对比图这样重新生成：

```sh
swift ~/.claude/skills/icon-logo/scripts/contact-sheet.swift design/app-icon/第1批
```

- 第1批（20 张）：按 icon-logo 技能重画，方形满版。L01–L15 是有表情的角色，L16–L20 没有脸；画法有果冻、软陶白描边、粗描边平涂、柔和渐变。选了 L06 仓鼠。
