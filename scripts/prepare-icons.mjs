// 从各产品仓库取图标，统一成满版方图（256px）输出到 src/assets/apps，圆角和阴影由页面 CSS 加。
// 满版方图（Yomi、Moni、Kakatta）直接缩放；macOS 模板图（四周留透明边、自带圆角阴影）只裁出中间的主体。
// 用法：node scripts/prepare-icons.mjs（产品仓库需要在 ~/code 下）
import sharp from 'sharp';
import { homedir } from 'node:os';
import { join } from 'node:path';

const code = join(homedir(), 'code');
const out = new URL('../src/assets/apps/', import.meta.url).pathname;

const icons = [
  { id: 'yomi', src: 'Yomi/Yomi/Assets.xcassets/AppIcon.appiconset/icon_512x512.png' },
  { id: 'momento', src: 'Momento/Momento/Assets.xcassets/AppIcon.appiconset/icon_512x512.png', template: true },
  { id: 'moni', src: 'Moni/Moni/Assets.xcassets/AppIcon.appiconset/AppIcon-512.png' },
  { id: 'kayoi', src: 'Kayoi/App/Assets.xcassets/AppIcon.appiconset/icon-512.png', template: true },
  { id: 'mekke', src: 'Mekke/Mekke/Assets.xcassets/AppIcon.appiconset/icon_512x512.png', template: true },
  { id: 'kakatta', src: 'Kakatta/assets/logo/kakatta.png' },
];

// macOS 512px 模板里，图标主体占 (50,50) 起 412×412
const BODY = { left: 50, top: 50, width: 412, height: 412 };

for (const icon of icons) {
  let img = sharp(join(code, icon.src));
  if (icon.template) img = sharp(await img.extract(BODY).png().toBuffer());
  // 模板图的圆角外是透明的，垫上主体自己的颜色，避免页面圆角比原图小时露出缝
  const flat = await img.resize(256, 256).flatten({ background: icon.template ? await edgeColor(img) : '#ffffff' }).png({ compressionLevel: 9 }).toBuffer();
  await sharp(flat).toFile(join(out, `${icon.id}.png`));
  console.log('ok', icon.id);
}

async function edgeColor(img) {
  const { data, info } = await img.clone().resize(256, 256).raw().toBuffer({ resolveWithObject: true });
  // 取上边缘中间一点的颜色
  const i = (2 * info.width + 128) * info.channels;
  return { r: data[i], g: data[i + 1], b: data[i + 2] };
}
