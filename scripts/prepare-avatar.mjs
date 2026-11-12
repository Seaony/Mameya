// 换头像：把图片复制成 src/assets/avatar.jpg，并生成结构化数据用的头像。网站图标用 Logo，见 prepare-favicon.mjs。
// 用法：node scripts/prepare-avatar.mjs <图片路径>
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const input = process.argv[2];
if (!input) throw new Error('用法：node scripts/prepare-avatar.mjs <图片路径>');

const root = new URL('..', import.meta.url).pathname;
const src = await sharp(input).rotate().resize(880, 880, { fit: 'cover' }).jpeg({ quality: 90, mozjpeg: true }).toBuffer();
writeFileSync(`${root}src/assets/avatar.jpg`, src);

await sharp(src).resize(400, 400).jpeg({ quality: 88, mozjpeg: true }).toFile(`${root}public/avatar.jpg`);

console.log('ok');
