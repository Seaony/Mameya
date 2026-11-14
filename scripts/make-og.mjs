// 生成三种语言的分享图（1200×630）到 public/og/<lang>.png。
// 用本机 Google Chrome 无头模式截图；改了文案或图标后重跑：node scripts/make-og.mjs
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const copy = {
  en: { lang: 'en', tagline: 'Next year brings its own snow.' },
  zh: { lang: 'zh-CN', tagline: '明年有明年的雪' },
  ja: { lang: 'ja', tagline: '来年には来年の雪が降る' },
};

const dataUri = (file, type) => `data:${type};base64,${readFileSync(join(root, file)).toString('base64')}`;
const font = dataUri('public/fonts/inter-latin.woff2', 'font/woff2');
const avatar = dataUri('src/assets/avatar.jpg', 'image/jpeg');
const logo = dataUri('src/assets/brand/logo.png', 'image/png');
const icons = ['codeedge', 'momento', 'monitto', 'diskit'].map((id) => dataUri(`src/assets/apps/${id}.png`, 'image/png'));

// 和网站浅色主题同一套颜色：毛豆绿 + 灰绿中性色
const page = ({ lang, tagline }) => `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><style>
@font-face { font-family: Inter; src: url(${font}) format('woff2'); font-weight: 100 900; }
html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
body {
  background: #fafbfa; color: #1b1d1b;
  font-family: Inter, 'PingFang SC', 'Hiragino Sans', sans-serif;
  -webkit-font-smoothing: antialiased; text-autospace: normal; word-break: auto-phrase;
  box-sizing: border-box; padding: 72px 88px; display: flex; flex-direction: column;
  background-image: radial-gradient(640px 420px at 82% 18%, rgb(110 150 120 / 0.16), transparent 70%);
}
.brand { display: flex; align-items: center; gap: 14px; font-size: 28px; font-weight: 600; letter-spacing: -0.01em; }
.brand img { height: 32px; }
.person { margin-top: 64px; display: flex; align-items: center; gap: 32px; }
.avatar { width: 128px; height: 128px; border-radius: 50%; box-shadow: 0 0 0 6px #fafbfa, 0 0 0 7px #e6e7e6; }
h1 { margin: 0; font-size: 72px; font-weight: 600; letter-spacing: -0.03em; line-height: 1.05; }
p { margin: 14px 0 0; font-size: 30px; color: #565b56; line-height: 1.35; max-width: 820px; }
.icons { margin-top: auto; display: flex; gap: 14px; align-items: center; }
.icons img { width: 64px; height: 64px; border-radius: 16px; box-shadow: 0 2px 8px rgb(40 60 45 / 0.16); }
.site { margin-left: auto; font-size: 24px; color: #6a6f69; }
</style></head><body>
<div class="brand"><img src="${logo}">Mameya</div>
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
