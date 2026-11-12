// 从各产品仓库取满版原图（不带 macOS 模板的透明边和圆角），缩成 512px 方图输出到 src/assets/apps，圆角和阴影由页面 CSS 加。
// 用法：node scripts/prepare-icons.mjs（产品仓库需要在 ~/code 下）
import sharp from 'sharp';
import { homedir } from 'node:os';
import { join } from 'node:path';

const code = join(homedir(), 'code');
const out = new URL('../src/assets/apps/', import.meta.url).pathname;

const icons = [
  { id: 'codeedge', src: 'CodeEdge/CodeEdge/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png' },
  { id: 'momento', src: 'Momento/design/app-icon/正式资源/app-icon-1024-fullbleed.png' },
  { id: 'moni', src: 'Moni/Moni/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png' },
  { id: 'diskit', src: 'Diskit/design/app-icon/folder-peek.png' },
  { id: 'kakatta', src: 'Kakatta/assets/logo/kakatta.png' },
];

for (const icon of icons) {
  await sharp(join(code, icon.src)).resize(512, 512).flatten({ background: '#ffffff' }).png({ compressionLevel: 9 }).toFile(join(out, `${icon.id}.png`));
  console.log('ok', icon.id);
}
