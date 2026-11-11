// 产品列表：链接集中写在这里，以后有了 <产品>.mameya.app 只改 url。
// 文案（一句话介绍）在 src/i18n/ui.ts 里按语言写。
import type { ImageMetadata } from 'astro';
import yomi from '../assets/apps/yomi.png';
import momento from '../assets/apps/momento.png';
import moni from '../assets/apps/moni.png';
import kayoi from '../assets/apps/kayoi.png';
import mekke from '../assets/apps/mekke.png';
import kakatta from '../assets/apps/kakatta.png';
import qrTelegram from '../assets/qr/telegram.png';
import qrWechat from '../assets/qr/wechat.png';
import qrXiaohongshu from '../assets/qr/xiaohongshu.png';
import qrDouyin from '../assets/qr/douyin.png';

export type AppId = 'yomi' | 'momento' | 'moni' | 'kayoi' | 'mekke' | 'kakatta';

export interface App {
  id: AppId;
  name: string;
  url: string;
  icon: ImageMetadata;
  inDevelopment?: boolean;
}

export const apps: App[] = [
  { id: 'yomi', name: 'Yomi', url: 'https://github.com/Seaony/Yomi', icon: yomi },
  { id: 'momento', name: 'Momento', url: 'https://github.com/Seaony/Momento', icon: momento },
  { id: 'moni', name: 'Moni', url: 'https://github.com/Seaony/Moni', icon: moni },
  { id: 'kayoi', name: 'Kayoi', url: 'https://github.com/Seaony/Kayoi', icon: kayoi },
  { id: 'mekke', name: 'Mekke', url: 'https://github.com/Seaony/Mekke', icon: mekke },
  { id: 'kakatta', name: 'Kakatta', url: 'https://github.com/Seaony/Kakatta', icon: kakatta, inDevelopment: true },
];

export const contact = {
  github: { url: 'https://github.com/Seaony', handle: 'Seaony' },
  email: 'seaony@outlook.com',
};

export type SocialId = 'telegram' | 'wechat' | 'xiaohongshu' | 'douyin';

// 社交账号：悬停（手机上点一下）显示二维码。有公开链接的（Telegram）整行同时是链接。
export const socials: { id: SocialId; qr: ImageMetadata; url?: string; handle?: string }[] = [
  { id: 'telegram', qr: qrTelegram, url: 'https://t.me/Milkwait2', handle: '@Milkwait2' },
  { id: 'wechat', qr: qrWechat },
  { id: 'xiaohongshu', qr: qrXiaohongshu },
  { id: 'douyin', qr: qrDouyin },
];
