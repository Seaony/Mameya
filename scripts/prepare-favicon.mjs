// 从选中的 Logo 原图（满版方图，带蓝紫渐变底）生成：
// 页面用的圆角 Logo（src/assets/brand/logo.png，128px，页头显示 24px）、
// favicon.ico（32px）、favicon.png（96px）都用圆角版；苹果触屏图标（180px）要不透明的方图，直接用原图，系统自己切圆角。
// 用法：node scripts/prepare-favicon.mjs，换完再跑一次 make-og.mjs
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const root = new URL('..', import.meta.url).pathname;
const logo = `${root}src/assets/brand/logo.png`;
const tile = `${root}design/app-icon/正式资源/logo-tile.png`;
const clear = { r: 0, g: 0, b: 0, alpha: 0 };

// 圆角半径取边长的 25%，24px 显示时是 6px，和产品图标的圆角观感一致
const size = 128;
const corner = Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${size / 4}"/></svg>`);
writeFileSync(logo, await sharp(tile).resize(size, size).composite([{ input: corner, blend: 'dest-in' }]).png({ compressionLevel: 9 }).toBuffer());

// Logo 放进正方形里居中，四周留一点边
const square = (size, pad, background = clear) =>
  sharp(logo)
    .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: clear })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: clear })
    .flatten(background === clear ? false : { background })
    .png({ compressionLevel: 9 })
    .toBuffer();

writeFileSync(`${root}public/favicon.png`, await square(96, 4));
writeFileSync(`${root}public/apple-touch-icon.png`, await sharp(tile).resize(180, 180).png({ compressionLevel: 9 }).toBuffer());

// favicon.ico：一个 32px PNG 包进 ICO 文件头
const png = await square(32, 1);
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
writeFileSync(`${root}public/favicon.ico`, Buffer.concat([header, png]));
console.log('ok');
