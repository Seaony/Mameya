# Logo 候选

## 现在用的

- Logo：`第3批/F01-enaga-vector.png`（圆滚滚的白色银喉长尾山雀，柔和渐变矢量画法，天蓝到浅薰衣草渐变底），2026-11-22 换掉仓鼠。
  - 原图缩成 1024 放在 `正式资源/logo-tile.png`，苹果触屏图标直接用它。
  - 网站页头、子站、favicon、分享图用的是 `src/assets/brand/logo.png`：128px 圆角方块（圆角 25%），由 `scripts/prepare-favicon.mjs` 从原图生成。不抠背景，因为白鸟抠出来放在浅色页面上几乎看不见。
- 之前的 Logo：第1批 L06 仓鼠抱豆子；更早的是 3D 小提篮装豆子（`design/codex-prompts/05-logo-basket-anime.md`）。

## 抽卡记录

每批的提示词（`prompts/`）都在对应目录里。候选图太大，只有选中的那张进仓库，其余和对比图只留在本地；本地有候选图时，对比图这样重新生成：

```sh
swift ~/.claude/skills/icon-logo/scripts/contact-sheet.swift design/app-icon/第1批
```

- 第1批（20 张）：按 icon-logo 技能重画，方形满版。L01–L15 是有表情的角色，L16–L20 没有脸；画法有果冻、软陶白描边、粗描边平涂、柔和渐变。选了 L06 仓鼠。
- 第2批（20 张）：不再用仓鼠（和 Momento 的图标撞了），换成小动物拿豆子、果冻豆子小屋、豆斗、家纹等。没选中，用户要求去掉豆子元素。
- 第3批（20 张）：完全不画豆子，从「屋」（小店、暖帘、灯笼、房子）和「まめ」（勤快、讲究细节）找角色。选了 F01 银喉长尾山雀。候选图只放在本地桌面 `Mameya-logo/第3批/`。
