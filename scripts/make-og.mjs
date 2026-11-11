// 生成三种语言的分享图（1200×630）到 public/og/<lang>.png。
// 用本机 Google Chrome 无头模式截图；改了文案或图标后重跑：node scripts/make-og.mjs
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const copy = {
  en: { lang: 'en', tagline: 'Building quiet, native apps for the Mac.' },
  zh: { lang: 'zh-CN', tagline: '在做 Mac 原生应用。' },
  ja: { lang: 'ja', tagline: 'Macのネイティブアプリを作っています。' },
};

const dataUri = (file, type) => `data:${type};base64,${readFileSync(join(root, file)).toString('base64')}`;
const font = dataUri('public/fonts/inter-latin.woff2', 'font/woff2');
const avatar = dataUri('src/assets/avatar.jpg', 'image/jpeg');
const icons = ['yomi', 'momento', 'moni', 'kayoi', 'mekke'].map((id) => dataUri(`src/assets/apps/${id}.png`, 'image/png'));

const page = ({ lang, tagline }) => `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><style>
@font-face { font-family: Inter; src: url(${font}) format('woff2'); font-weight: 400 600; }
html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
body {
  background: #fcfcfb; color: #1b1b18;
  font-family: Inter, 'PingFang SC', 'Hiragino Sans', sans-serif;
  -webkit-font-smoothing: antialiased; text-autospace: normal; word-break: auto-phrase;
  box-sizing: border-box; padding: 88px 96px; display: flex; flex-direction: column;
}
.person { display: flex; align-items: center; gap: 28px; }
.avatar { width: 104px; height: 104px; border-radius: 50%; box-shadow: 0 0 0 1px rgb(0 0 0 / .06); }
h1 { margin: 0; font-size: 56px; font-weight: 500; letter-spacing: -0.02em; line-height: 1.1; }
p { margin: 14px 0 0; font-size: 30px; color: #6b6a65; line-height: 1.35; max-width: 860px; }
.icons { margin-top: auto; display: flex; gap: 10px; align-items: center; }
.icons img { width: 76px; height: 76px; }
.site { margin-left: auto; font-size: 24px; color: #6b6a65; }
</style></head><body>
<div class="person"><img class="avatar" src="${avatar}"><div><h1>Seaony</h1><p>${tagline}</p></div></div>
<div class="icons">${icons.map((src) => `<img src="${src}">`).join('')}<span class="site">mameya.app</span></div>
</body></html>`;

const dir = mkdtempSync(join(tmpdir(), 'mameya-og-'));
mkdirSync(join(root, 'public/og'), { recursive: true });

for (const [id, c] of Object.entries(copy)) {
  const html = join(dir, `${id}.html`);
  writeFileSync(html, page(c));
  const out = join(root, `public/og/${id}.png`);
  execFileSync(chrome, [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    `--screenshot=${out}`,
    `file://${html}`,
  ], { stdio: 'ignore' });
  console.log('ok', out);
}
