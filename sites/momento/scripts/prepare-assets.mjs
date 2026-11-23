// 从 Momento 仓库取素材：主界面截图（中英文、深浅色各一张）、满版 App 图标，
// 再用图标生成 favicon、苹果触屏图标，用 README 的主图生成分享图。
// 用法：node sites/momento/scripts/prepare-assets.mjs（Momento 仓库需要在 ~/code 下）
// 主界面截图不进 Momento 仓库，没有的话先按 Momento 的 design/promo/README.md 渲染一次。
import sharp from 'sharp';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';

const repo = join(homedir(), 'code/Momento');
const site = new URL('..', import.meta.url).pathname;
mkdirSync(join(site, 'src/assets'), { recursive: true });

// 截图是 2 倍渲染的 2880×1800，缩到 2000 宽存成 JPEG，页面再按显示宽度出小图
for (const theme of ['light', 'dark']) {
  for (const [lang, file] of [['en', 'en'], ['zh', 'zh-CN']]) {
    await sharp(join(repo, `design/promo/main-${file}-${theme}.png`))
      .resize(2000)
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(join(site, `src/assets/shot-${theme}-${lang}.jpg`));
  }
}

// 满版母图（和主站产品列表同一张），圆角由页面加
const icon = join(repo, 'design/app-icon/正式资源/app-icon-1024-fullbleed.png');
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

// 分享图 1200×630：README 主图是 1586×992，比分享图高，直接裁会切掉标题或底部的图标卡片。
// 所以整张缩到 630 高，左右用边缘的渐变底色补齐
mkdirSync(join(site, 'public/og'), { recursive: true });
for (const lang of ['en', 'zh']) {
  const hero = await sharp(join(repo, `.github/assets/momento-hero-${lang}.png`)).resize({ height: 630 }).toBuffer();
  const { width } = await sharp(hero).metadata();
  const left = Math.floor((1200 - width) / 2);
  await sharp(hero)
    .extend({ left, right: 1200 - width - left, extendWith: 'copy' })
    .png({ compressionLevel: 9 })
    .toFile(join(site, `public/og/${lang}.png`));
}
console.log('ok');
