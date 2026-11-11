// 从各产品仓库取图标，统一成 macOS 图标模板（412/512 主体、连续圆角、浅阴影），输出 256px 到 src/assets/apps。
// 满版方图（Yomi、Moni、Kakatta）要自己加圆角和阴影；已经是标准模板的直接缩放。
// 用法：node scripts/prepare-icons.mjs（产品仓库需要在 ~/code 下）
import sharp from 'sharp';
import { homedir } from 'node:os';
import { join } from 'node:path';

const code = join(homedir(), 'code');
const out = new URL('../src/assets/apps/', import.meta.url).pathname;

const icons = [
  { id: 'yomi', src: 'Yomi/Yomi/Assets.xcassets/AppIcon.appiconset/icon_512x512.png', fullBleed: true },
  { id: 'momento', src: 'Momento/Momento/Assets.xcassets/AppIcon.appiconset/icon_512x512.png' },
  { id: 'moni', src: 'Moni/Moni/Assets.xcassets/AppIcon.appiconset/AppIcon-512.png', fullBleed: true },
  { id: 'kayoi', src: 'Kayoi/App/Assets.xcassets/AppIcon.appiconset/icon-512.png' },
  { id: 'mekke', src: 'Mekke/Mekke/Assets.xcassets/AppIcon.appiconset/icon_512x512.png' },
  { id: 'kakatta', src: 'Kakatta/assets/logo/kakatta.png', fullBleed: true },
];

const CANVAS = 512;
const BODY = 412;
const INSET = (CANVAS - BODY) / 2;

// macOS 图标的圆角接近 n=5 的超椭圆
function squirclePath(size, offset = 0) {
  const r = size / 2;
  const n = 5;
  const pts = [];
  for (let i = 0; i < 360; i++) {
    const t = (i / 360) * Math.PI * 2;
    const c = Math.cos(t);
    const s = Math.sin(t);
    const x = r + r * Math.sign(c) * Math.abs(c) ** (2 / n);
    const y = r + r * Math.sign(s) * Math.abs(s) ** (2 / n);
    pts.push(`${(x + offset).toFixed(2)},${(y + offset).toFixed(2)}`);
  }
  return `M${pts.join('L')}Z`;
}

async function maskToTemplate(file) {
  const art = await sharp(file)
    .resize(BODY, BODY)
    .composite([
      {
        input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${BODY}" height="${BODY}"><path d="${squirclePath(BODY)}"/></svg>`),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();

  // 阴影：和另外几个标准模板图标差不多的下偏、柔和阴影
  const shadow = await sharp(
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${CANVAS}" height="${CANVAS}"><path transform="translate(0 8)" fill="#000" fill-opacity="0.32" d="${squirclePath(BODY, INSET)}"/></svg>`,
    ),
  )
    .blur(9)
    .png()
    .toBuffer();

  return sharp({ create: { width: CANVAS, height: CANVAS, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: shadow, left: 0, top: 0 },
      { input: art, left: INSET, top: INSET },
    ])
    .png()
    .toBuffer();
}

for (const icon of icons) {
  const file = join(code, icon.src);
  const input = icon.fullBleed ? await maskToTemplate(file) : file;
  await sharp(input).resize(256, 256).png({ compressionLevel: 9 }).toFile(join(out, `${icon.id}.png`));
  console.log('ok', icon.id);
}
