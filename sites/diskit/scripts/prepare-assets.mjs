// 从 Diskit 仓库取素材：README 里的产品宣传图（深浅色、中英文各一张，原样复制），
// 再用满版 App 图标生成 favicon、苹果触屏图标，用浅色英文/中文产品图生成分享图，
// 最后按 App 里的默认配色复制各类位置的图标（亮暗各一张）。
// 用法：node sites/diskit/scripts/prepare-assets.mjs（Diskit 仓库需要在 ~/code 下）
import sharp from 'sharp';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const repo = join(homedir(), 'code/Diskit');
const site = new URL('..', import.meta.url).pathname;

for (const theme of ['light', 'dark']) {
  for (const lang of ['en', 'zh']) {
    copyFileSync(join(repo, `docs/assets/product-${theme}-${lang}.jpg`), join(site, `src/assets/shot-${theme}-${lang}.jpg`));
  }
}

// App 资源里的图标带 macOS 模板的透明边，这里用设计稿里的满版原图（和主站产品列表同一张），圆角由页面加
const icon = join(repo, 'design/app-icon/folder-peek.png');
await sharp(icon).resize(512, 512).png({ compressionLevel: 9 }).toFile(join(site, 'src/assets/icon.png'));
await sharp(icon).resize(180, 180).png({ compressionLevel: 9 }).toFile(join(site, 'public/apple-touch-icon.png'));
// 网站图标切成圆角，浏览器标签页里不是一块方砖
const rounded = (size) =>
  sharp(icon)
    .resize(size, size)
    .composite([{ input: Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${size * 0.225}" fill="#fff"/></svg>`), blend: 'dest-in' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
writeFileSync(join(site, 'public/favicon.png'), await rounded(96));
const png = await rounded(32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
writeFileSync(join(site, 'public/favicon.ico'), Buffer.concat([header, png]));

// 分享图 1200×630：产品图本身就是横版宣传图（左标题右面板），等比缩放后上下裁一点
for (const lang of ['en', 'zh']) {
  await sharp(join(repo, `docs/assets/product-light-${lang}.jpg`))
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9 })
    .toFile(join(site, `public/og/${lang}.png`));
}

// 位置类型图标：每种类型取 App 里的默认颜色（manifest.json），亮暗两张 SVG
const { types } = JSON.parse(readFileSync(join(repo, 'design/icons/manifest.json'), 'utf8'));
const outDir = join(site, 'public/types');
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir);
let count = 0;
for (const [kind, color] of Object.entries(types)) {
  if (kind === 'emptyLink') continue;
  const set = join(repo, `App/Assets.xcassets/TypeIcon-${kind}-${color}.imageset`);
  for (const theme of ['light', 'dark']) copyFileSync(join(set, `${theme}.svg`), join(outDir, `${kind}-${theme}.svg`));
  count++;
}
console.log(`ok，类型图标 ${count} 个`);
