// 从 CodeEdge 仓库取素材：README 里的产品宣传图（深浅色、中英文各一张，原样复制），
// 再用 App 图标生成 favicon、苹果触屏图标，用浅色英文/中文产品图生成分享图，最后整理服务商列表和 logo。
// 用法：node sites/codeedge/scripts/prepare-assets.mjs（CodeEdge 仓库需要在 ~/code 下）
import sharp from 'sharp';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const repo = join(homedir(), 'code/CodeEdge');
const site = new URL('..', import.meta.url).pathname;

for (const theme of ['light', 'dark']) {
  for (const lang of ['en', 'zh']) {
    copyFileSync(join(repo, `docs/assets/product-${theme}-${lang}.jpg`), join(site, `src/assets/shot-${theme}-${lang}.jpg`));
  }
}

const icon = join(repo, 'CodeEdge/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png');
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

// 分享图 1200×630：产品图本身就是横版宣传图（左标题右界面），等比缩放后上下裁一点
for (const lang of ['en', 'zh']) {
  await sharp(join(repo, `docs/assets/product-light-${lang}.jpg`))
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9 })
    .toFile(join(site, `public/og/${lang}.png`));
}
console.log('ok');

// 支持的服务商：名字和顺序照 README 的列表，logo 用 App 里同一套单色图标（来自 CodexBar，MIT）
const readme = readFileSync(join(repo, 'README.md'), 'utf8');
const names = readme
  .match(/\nCodex · Claude[^\n]+/)[0]
  .trim()
  .split(' · ')
  .filter((n) => n !== 'and more');
// 目录里名字和 id 的对应；名字里带「AI」拼接的几个和 App 的特殊映射手工补上
const catalog = readFileSync(join(repo, 'CodeEdge/ProviderCatalog.swift'), 'utf8');
const byName = Object.fromEntries([...catalog.matchAll(/item\("([^"]+)", "([^"]+)"/g)].map((m) => [m[2].toLowerCase(), m[1]]));
const manual = {
  'OpenAI': 'codex', 'Azure OpenAI': 'codex', 'Alibaba Token Plan': 'alibaba', 'Moonshot': 'kimi', 'z.ai / GLM': 'zai',
  'JetBrains AI': 'jetbrains', 'AWS Bedrock': 'bedrock', 'Vertex AI': 'vertexai', 'xAI': 'xai', 'Notion AI': 'notion',
  'Sakana AI': 'sakana', 'Abacus AI': 'abacus', 'Vercel AI Gateway': 'vercel', 'GitKraken AI': 'gitkraken',
};
const iconDir = join(repo, 'CodeEdge/ProviderIcons');
const outDir = join(site, 'public/providers');
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir);
copyFileSync(join(iconDir, 'ProviderIcons-LICENSE.txt'), join(outDir, 'LICENSE.txt'));
const list = names.map((name) => {
  const id = manual[name] ?? byName[name.toLowerCase()];
  const file = id && join(iconDir, `ProviderIcon-${id}.svg`);
  if (!file || !existsSync(file)) {
    console.warn(`没有 logo：${name}`);
    return { name, icon: null };
  }
  copyFileSync(file, join(outDir, `${id}.svg`));
  return { name, icon: id };
});
writeFileSync(join(site, 'src/providers.json'), JSON.stringify(list, null, 2) + '\n');
console.log(`服务商 ${list.length} 个`);
