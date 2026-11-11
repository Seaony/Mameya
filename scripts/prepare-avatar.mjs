// 换头像：把图片复制成 src/assets/avatar.jpg，并生成 favicon、苹果触屏图标、结构化数据用的头像。
// 用法：node scripts/prepare-avatar.mjs <图片路径>
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const input = process.argv[2];
if (!input) throw new Error('用法：node scripts/prepare-avatar.mjs <图片路径>');

const root = new URL('..', import.meta.url).pathname;
const src = await sharp(input).rotate().resize(880, 880, { fit: 'cover' }).jpeg({ quality: 90, mozjpeg: true }).toBuffer();
writeFileSync(`${root}src/assets/avatar.jpg`, src);

const circle = (s) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}"><circle cx="${s / 2}" cy="${s / 2}" r="${s / 2}"/></svg>`);
const round = (s) => sharp(src).resize(s, s).composite([{ input: circle(s), blend: 'dest-in' }]).png({ compressionLevel: 9 }).toBuffer();

writeFileSync(`${root}public/favicon.png`, await round(96));
await sharp(src).resize(180, 180).png({ compressionLevel: 9 }).toFile(`${root}public/apple-touch-icon.png`);
await sharp(src).resize(400, 400).jpeg({ quality: 88, mozjpeg: true }).toFile(`${root}public/avatar.jpg`);

// favicon.ico：一个 32px 圆形 PNG 包进 ICO 文件头
const png = await round(32);
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
