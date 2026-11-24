// 产品列表：链接集中写在这里，以后有了 <产品>.mameya.app 只改 url。
// 文案（一句话介绍）在 src/i18n/ui.ts 里按语言写。
import type { ImageMetadata } from 'astro';
import codeedge from '../assets/apps/codeedge.png';
import momento from '../assets/apps/momento.png';
import monitto from '../assets/apps/monitto.png';
import diskit from '../assets/apps/diskit.png';
import tartkit from '../assets/apps/tartkit.png';
import grlive from '../assets/apps/grlive.png';
import qrWechat from '../assets/qr/wechat.png';
import qrXiaohongshu from '../assets/qr/xiaohongshu.png';
import qrDouyin from '../assets/qr/douyin.png';

export type AppId = 'codeedge' | 'momento' | 'monitto' | 'diskit' | 'tartkit' | 'grlive';

export interface App {
  id: AppId;
  name: string;
  // 还没有公开页面的产品不写，列表里只显示、不能点
  url?: string;
  icon: ImageMetadata;
  inDevelopment?: boolean;
}

export const apps: App[] = [
  { id: 'codeedge', name: 'CodeEdge', url: 'https://codeedge.mameya.app/', icon: codeedge },
  { id: 'momento', name: 'Momento', url: 'https://momento.mameya.app/', icon: momento },
  { id: 'monitto', name: 'Monitto', url: 'https://monitto.mameya.app/', icon: monitto },
  { id: 'diskit', name: 'Diskit', url: 'https://diskit.mameya.app/', icon: diskit },
  { id: 'tartkit', name: 'Tartkit', url: 'https://tartkit.mameya.app/', icon: tartkit },
  // 首屏的「正在开发」取第一个开发中的产品
  { id: 'grlive', name: 'GRLive', icon: grlive, inDevelopment: true },
];

export const contact = {
  github: { url: 'https://github.com/Seaony', handle: 'Seaony' },
  x: { url: 'https://x.com/wseaony', handle: 'wseaony' },
  email: 'seaony@outlook.com',
};

export type SocialId = 'telegram' | 'wechat' | 'xiaohongshu' | 'douyin';

export const telegram = { url: 'https://t.me/Milkwait2', handle: '@Milkwait2' };

// 没有公开个人链接的账号：悬停（手机上点一下）显示二维码
export const qrSocials: { id: Exclude<SocialId, 'telegram'>; qr: ImageMetadata }[] = [
  { id: 'wechat', qr: qrWechat },
  { id: 'xiaohongshu', qr: qrXiaohongshu },
  { id: 'douyin', qr: qrDouyin },
];
