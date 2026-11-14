// 从 Monitto 仓库取素材：README 里的宣传主图（原样复制，只有英文深色一张），
// 再用满版 App 图标生成 favicon、苹果触屏图标，用宣传主图生成分享图。
// 用法：node sites/monitto/scripts/prepare-assets.mjs（Monitto 仓库需要在 ~/code 下）
import sharp from 'sharp';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';

const repo = join(homedir(), 'code/Monitto');
const site = new URL('..', import.meta.url).pathname;

const hero = join(repo, 'docs/assets/promo/monitto-hero.png');
copyFileSync(hero, join(site, 'src/assets/shot.png'));

// App 资源里的图标带 macOS 模板的透明边，这里用设计稿里的满版原图（和主站产品列表同一张），圆角由页面加
const icon = join(repo, 'design/app-icon/正式资源/AppIcon-1024.png');
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

// 分享图 1200×630：宣传主图是 16:10 横版，等比缩放后从底部裁掉一点，保住顶部的标题；中英文共用一张
mkdirSync(join(site, 'public/og'), { recursive: true });
await sharp(hero).resize(1200, 630, { fit: 'cover', position: 'top' }).png({ compressionLevel: 9 }).toFile(join(site, 'public/og/og.png'));
console.log('ok');
