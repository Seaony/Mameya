// 用 Logo 生成网站图标：favicon.ico（32px）、favicon.png（96px）、苹果触屏图标（180px，浅绿底）。
// 用法：node scripts/prepare-favicon.mjs
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const root = new URL('..', import.meta.url).pathname;
const logo = `${root}src/assets/brand/logo.png`;
const clear = { r: 0, g: 0, b: 0, alpha: 0 };

// Logo 放进正方形里居中，四周留一点边
const square = (size, pad, background = clear) =>
  sharp(logo)
    .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: clear })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: clear })
    .flatten(background === clear ? false : { background })
    .png({ compressionLevel: 9 })
    .toBuffer();

writeFileSync(`${root}public/favicon.png`, await square(96, 4));
writeFileSync(`${root}public/apple-touch-icon.png`, await square(180, 28, '#e2eadf'));

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
