// 全站文案，按语言分。组件里不写死任何文字。
import type { AppId, SocialId } from '../data/apps';

export type Lang = 'en' | 'zh' | 'ja';

export const langs: Lang[] = ['en', 'zh', 'ja'];

// 每种语言的路径、<html lang>、hreflang、Open Graph 地区，以及切换器上显示的名字
export const locales: Record<Lang, { path: string; htmlLang: string; hreflang: string; ogLocale: string; label: string }> = {
  en: { path: '/', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', label: 'EN' },
  zh: { path: '/zh/', htmlLang: 'zh-CN', hreflang: 'zh-CN', ogLocale: 'zh_CN', label: '中文' },
  ja: { path: '/ja/', htmlLang: 'ja', hreflang: 'ja', ogLocale: 'ja_JP', label: '日本語' },
};

interface Dict {
  title: string;
  description: string;
  tagline: string;
  intro: string;
  projects: string;
  contact: string;
  inDevelopment: string;
  email: string;
  apps: Record<AppId, string>;
  socials: Record<SocialId, { name: string; scan: string }>;
  qrCode: string;
  language: string;
  theme: { label: string; system: string; light: string; dark: string };
  notFound: { title: string; heading: string; back: string };
  avatarAlt: string;
}

export const ui: Record<Lang, Dict> = {
  en: {
    title: 'Seaony · Native Mac apps',
    description:
      'Seaony is a full-stack developer in Singapore who makes native Mac apps: Yomi, Momento, Moni, Kayoi and Mekke.',
    tagline: 'Building quiet, native apps for the Mac.',
    intro:
      'I’m a full-stack developer based in Singapore. Lately I’ve been writing Mac apps in Swift and SwiftUI. On the web I use TypeScript, React, Next.js and Node.js. Before that, it was PHP and Laravel.',
    projects: 'Projects',
    contact: 'Contact',
    inDevelopment: 'In development',
    email: 'Email',
    apps: {
      yomi: 'Every AI quota. One glance.',
      momento: 'Every image. Quietly kept.',
      moni: 'A compact menu bar monitor for macOS.',
      kayoi: 'Every location. One menu bar.',
      mekke: 'Found it. Before anyone else.',
      kakatta: 'Watches Xianyu for what you want. Runs in Docker.',
    },
    socials: {
      telegram: { name: 'Telegram', scan: 'Scan with Telegram' },
      wechat: { name: 'WeChat', scan: 'Scan with WeChat' },
      xiaohongshu: { name: 'Xiaohongshu', scan: 'Scan in Xiaohongshu' },
      douyin: { name: 'Douyin', scan: 'Scan in Douyin' },
    },
    qrCode: 'QR code',
    language: 'Language',
    theme: { label: 'Theme', system: 'System', light: 'Light', dark: 'Dark' },
    notFound: {
      title: 'Page not found · Seaony',
      heading: 'Page not found',
      back: 'Back to home',
    },
    avatarAlt: 'Seaony',
  },
  zh: {
    title: 'Seaony · 在做 Mac 原生应用',
    description: 'Seaony，全栈开发者，人在新加坡，做 Mac 原生应用：Yomi、Momento、Moni、Kayoi 和 Mekke。',
    tagline: '在做 Mac 原生应用。',
    intro:
      '全栈开发者，人在新加坡。最近主要用 Swift 和 SwiftUI 写 Mac 应用，Web 那边用 TypeScript、React、Next.js 和 Node.js。最早写的是 PHP 和 Laravel。',
    projects: '产品',
    contact: '联系',
    inDevelopment: '开发中',
    email: '邮箱',
    apps: {
      yomi: '所有 AI 额度，一眼看清',
      momento: '灵感图片，安静收好',
      moni: '一眼看清 Mac 状态',
      kayoi: '手机、共享、网盘，都在菜单栏',
      mekke: 'めっけ！比别人先看到',
      kakatta: '帮你盯着闲鱼，Docker 自己部署',
    },
    socials: {
      telegram: { name: 'Telegram', scan: '用 Telegram 扫一扫' },
      wechat: { name: '微信', scan: '用微信扫一扫' },
      xiaohongshu: { name: '小红书', scan: '用小红书扫一扫' },
      douyin: { name: '抖音', scan: '用抖音扫一扫' },
    },
    qrCode: '二维码',
    language: '语言',
    theme: { label: '外观', system: '跟随系统', light: '浅色', dark: '深色' },
    notFound: {
      title: '页面不存在 · Seaony',
      heading: '页面不存在',
      back: '回到首页',
    },
    avatarAlt: 'Seaony',
  },
  ja: {
    title: 'Seaony · Macのネイティブアプリ',
    description:
      'シンガポール在住のフルスタックエンジニア、Seaony。Macのネイティブアプリを作っています。Yomi、Momento、Moni、Kayoi、Mekke。',
    tagline: 'Macのネイティブアプリを作っています。',
    intro:
      'シンガポールでフルスタックエンジニアをしています。最近はSwiftとSwiftUIでMacアプリを書いていて、WebではTypeScript、React、Next.js、Node.jsを使います。もともとはPHPとLaravelでした。',
    projects: 'プロダクト',
    contact: '連絡先',
    inDevelopment: '開発中',
    email: 'メール',
    apps: {
      yomi: 'AIの利用枠を、ひと目で',
      momento: '集めた画像を、一か所に',
      moni: 'Macの状態を、ひと目で',
      kayoi: 'スマホも共有フォルダもクラウドも、メニューバーから',
      mekke: 'めっけ！誰よりも先に見つける',
      kakatta: '闲鱼で欲しいものを見張る。Dockerで動く',
    },
    socials: {
      telegram: { name: 'Telegram', scan: 'Telegramでスキャン' },
      wechat: { name: 'WeChat', scan: 'WeChatでスキャン' },
      xiaohongshu: { name: '小紅書', scan: '小紅書アプリでスキャン' },
      douyin: { name: 'Douyin', scan: 'Douyinアプリでスキャン' },
    },
    qrCode: 'QRコード',
    language: '言語',
    theme: { label: 'テーマ', system: 'システム', light: 'ライト', dark: 'ダーク' },
    notFound: {
      title: 'ページが見つかりません · Seaony',
      heading: 'ページが見つかりません',
      back: 'ホームへ戻る',
    },
    avatarAlt: 'Seaony',
  },
};
