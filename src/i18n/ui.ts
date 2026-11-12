// 全站文案，按语言分。组件里不写死任何文字。
import type { AppId, SocialId } from '../data/apps';

export type Lang = 'en' | 'zh' | 'ja';

export const langs: Lang[] = ['en', 'zh', 'ja'];

// 每种语言的路径、<html lang>、hreflang、Open Graph 地区，以及语言菜单里显示的名字
export const locales: Record<
  Lang,
  { path: string; htmlLang: string; hreflang: string; ogLocale: string; code: string; label: string; short: string }
> = {
  en: { path: '/', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', code: 'EN', label: 'English', short: 'EN' },
  zh: { path: '/zh/', htmlLang: 'zh-CN', hreflang: 'zh-CN', ogLocale: 'zh_CN', code: 'ZH', label: '简体中文', short: '中文' },
  ja: { path: '/ja/', htmlLang: 'ja', hreflang: 'ja', ogLocale: 'ja_JP', code: 'JA', label: '日本語', short: '日本語' },
};

interface Dict {
  title: string;
  description: string;
  tagline: string;
  // 简介按句意分行，每个元素是一行
  intro: string[];
  avatarAlt: string;
  building: (name: string) => string;
  contactLabel: string;
  email: string;
  about: string;
  aboutRows: { location: [string, string]; making: [string, string]; stack: string };
  projects: string;
  inDevelopment: string;
  socials: Record<SocialId, { name: string; scan: string }>;
  qrCode: string;
  backToTop: string;
  header: { site: string; language: string; toDark: string; toLight: string };
  notFound: {
    title: string;
    heading: string;
    body: string;
    home: string;
  };
  apps: Record<AppId, string>;
}

export const ui: Record<Lang, Dict> = {
  en: {
    title: 'Seaony',
    description:
      'Seaony is a full-stack developer in Singapore who builds Mac apps, websites and the services behind them, and cares about getting the details right. Projects include CodeEdge, Momento, Moni and Diskit.',
    tagline: 'Next year brings its own snow.',
    intro: [
      'A full-stack developer who makes products.',
      'What I build changes from one project to the next,',
      'but I care about the same thing every time:',
      'every detail has been looked after, and the people using it can feel it.',
    ],
    avatarAlt: 'Seaony’s avatar',
    building: (name) => `Building ${name}`,
    contactLabel: 'Contact',
    email: 'Email',
    about: 'About',
    aboutRows: {
      location: ['Based in', 'Singapore'],
      making: ['Building', 'Mac apps, websites and the services behind them'],
      stack: 'Stack',
    },
    projects: 'Projects',
    inDevelopment: 'In progress',
    socials: {
      telegram: { name: 'Telegram', scan: 'Scan with Telegram' },
      wechat: { name: 'WeChat', scan: 'Scan with WeChat to add me' },
      xiaohongshu: { name: 'Xiaohongshu', scan: 'Scan with Xiaohongshu' },
      douyin: { name: 'Douyin', scan: 'Scan with Douyin' },
    },
    qrCode: 'QR code',
    backToTop: 'Back to top',
    header: {
      site: 'Site settings',
      language: 'Language',
      toDark: 'Switch to dark mode',
      toLight: 'Switch to light mode',
    },
    notFound: {
      title: 'Page not found · Seaony',
      heading: 'Page not found',
      body: 'めっけ failed… there’s nothing here.',
      home: 'Back to home',
    },
    apps: {
      codeedge: 'Every AI quota, at the edge of your screen.',
      momento: 'Every image. Quietly kept.',
      moni: 'A compact menu bar monitor for macOS.',
      diskit: 'Every location. One menu bar.',
      kakatta: 'Watches Xianyu for what you want. Runs in Docker.',
    },
  },
  zh: {
    title: 'Seaony',
    description: 'Seaony，全栈开发者，人在新加坡。Mac 应用、网站和服务端都写，在意把每个细节做好。作品有 CodeEdge、Momento、Moni 和 Diskit。',
    tagline: '明年有明年的雪',
    intro: [
      '一个做产品的全栈开发者。',
      '写的东西各不相同，在意的是同一件事：',
      '每个细节都被认真对待过，用的人能感觉得到。',
    ],
    avatarAlt: 'Seaony 的头像',
    building: (name) => `正在开发 ${name}`,
    contactLabel: '联系方式',
    email: '邮箱',
    about: '关于',
    aboutRows: {
      location: ['所在', 'Singapore'],
      making: ['在做', 'Mac 应用、网站和服务端'],
      stack: '技术栈',
    },
    projects: '产品',
    inDevelopment: '开发中',
    socials: {
      telegram: { name: 'Telegram', scan: '用 Telegram 扫一扫' },
      wechat: { name: '微信', scan: '微信扫一扫，加我好友' },
      xiaohongshu: { name: '小红书', scan: '小红书扫一扫，关注我' },
      douyin: { name: '抖音', scan: '抖音扫一扫，关注我' },
    },
    qrCode: '二维码',
    backToTop: '回到顶部',
    header: {
      site: '站点设置',
      language: '语言',
      toDark: '切换到深色模式',
      toLight: '切换到浅色模式',
    },
    notFound: {
      title: '页面不存在 · Seaony',
      heading: '这一页没找到',
      body: 'めっけ失败……这里什么也没有。',
      home: '回到首页',
    },
    apps: {
      codeedge: '所有 AI 额度，停在屏幕边上',
      momento: '灵感图片，安静收好',
      moni: '一眼看清 Mac 状态',
      diskit: '手机、共享、网盘，都在菜单栏',
      kakatta: '帮你盯着闲鱼，Docker 自己部署',
    },
  },
  ja: {
    title: 'Seaony',
    description:
      'シンガポール在住のフルスタックエンジニア、Seaony。Macアプリ、Webサイト、サーバーサイドまで手がけ、細部まで丁寧に作ることを大切にしています。CodeEdge、Momento、Moni、Diskit。',
    tagline: '来年には来年の雪が降る',
    intro: [
      'プロダクトを作るフルスタックエンジニア。',
      '作るものは毎回違っても、大切にしていることはひとつです。',
      '細部まで丁寧に向き合うこと。使う人に、それが伝わるように。',
    ],
    avatarAlt: 'Seaonyのアバター',
    building: (name) => `${name}を開発中`,
    contactLabel: '連絡先',
    email: 'メール',
    about: 'プロフィール',
    aboutRows: {
      location: ['拠点', 'Singapore'],
      making: ['制作', 'Macアプリ、Webサイト、サーバーサイド'],
      stack: '技術',
    },
    projects: 'プロダクト',
    inDevelopment: '開発中',
    socials: {
      telegram: { name: 'Telegram', scan: 'Telegramでスキャン' },
      wechat: { name: 'WeChat', scan: 'WeChatでスキャンして友だち追加' },
      xiaohongshu: { name: '小紅書', scan: '小紅書アプリでスキャン' },
      douyin: { name: 'Douyin', scan: 'Douyinアプリでスキャン' },
    },
    qrCode: 'QRコード',
    backToTop: 'ページの先頭へ',
    header: {
      site: 'サイト設定',
      language: '言語',
      toDark: 'ダークモードに切り替え',
      toLight: 'ライトモードに切り替え',
    },
    notFound: {
      title: 'ページが見つかりません · Seaony',
      heading: 'ページが見つかりません',
      body: 'めっけ失敗……ここには何もないみたい。',
      home: 'ホームへ戻る',
    },
    apps: {
      codeedge: 'AIの利用枠を、画面の端に',
      momento: '集めた画像を、そっとしまう',
      moni: 'Macの状態を、ひと目で',
      diskit: 'スマホも共有フォルダもクラウドも、メニューバーから',
      kakatta: '闲鱼で欲しいものを見張る。Dockerで動く',
    },
  },
};
