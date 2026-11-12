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
  intro: string;
  avatarAlt: string;
  building: (name: string) => string;
  contactLabel: string;
  email: string;
  about: string;
  aboutRows: { location: [string, string]; focus: [string, string] };
  stackRows: { mac: string; web: string; before: string };
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
      'Seaony is a full-stack developer in Singapore who makes native Mac apps: Yomi, Momento, Moni and Kayoi.',
    tagline: 'Next year brings its own snow.',
    intro:
      'I’m a full-stack developer based in Singapore. Lately I’ve been writing Mac apps in Swift and SwiftUI. On the web I use TypeScript, React, Next.js and Node.js. Before that, it was PHP and Laravel.',
    avatarAlt: 'Seaony’s avatar',
    building: (name) => `Building ${name}`,
    contactLabel: 'Contact',
    email: 'Email',
    about: 'About',
    aboutRows: {
      location: ['Based in', 'Singapore'],
      focus: ['Focus', 'Native macOS apps'],
    },
    stackRows: { mac: 'Mac', web: 'Web', before: 'Before' },
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
      yomi: 'Every AI quota. One glance.',
      momento: 'Every image. In one place.',
      moni: 'A compact menu bar monitor for macOS.',
      kayoi: 'Every location. One menu bar.',
      kakatta: 'Watches Xianyu for what you want. Runs in Docker.',
    },
  },
  zh: {
    title: 'Seaony',
    description: 'Seaony，全栈开发者，人在新加坡，做 Mac 原生应用：Yomi、Momento、Moni 和 Kayoi。',
    tagline: '明年有明年的雪',
    intro:
      '全栈开发者，人在新加坡。最近主要用 Swift 和 SwiftUI 写 Mac 应用，Web 那边用 TypeScript、React、Next.js 和 Node.js。最早写的是 PHP 和 Laravel。',
    avatarAlt: 'Seaony 的头像',
    building: (name) => `正在开发 ${name}`,
    contactLabel: '联系方式',
    email: '邮箱',
    about: '关于',
    aboutRows: {
      location: ['所在', '新加坡'],
      focus: ['专注', 'macOS 原生应用'],
    },
    stackRows: { mac: 'Mac', web: 'Web', before: '起步' },
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
      yomi: '所有 AI 额度，一眼看清',
      momento: '灵感图片，收在一处',
      moni: '一眼看清 Mac 状态',
      kayoi: '手机、共享、网盘，都在菜单栏',
      kakatta: '帮你盯着闲鱼，Docker 自己部署',
    },
  },
  ja: {
    title: 'Seaony',
    description:
      'シンガポール在住のフルスタックエンジニア、Seaony。Macのネイティブアプリを作っています。Yomi、Momento、Moni、Kayoi。',
    tagline: '来年には来年の雪が降る',
    intro:
      'シンガポールでフルスタックエンジニアをしています。最近はSwiftとSwiftUIでMacアプリを書いていて、WebではTypeScript、React、Next.js、Node.jsを使います。もともとはPHPとLaravelでした。',
    avatarAlt: 'Seaonyのアバター',
    building: (name) => `${name}を開発中`,
    contactLabel: '連絡先',
    email: 'メール',
    about: 'プロフィール',
    aboutRows: {
      location: ['拠点', 'シンガポール'],
      focus: ['専門', 'macOSネイティブアプリ'],
    },
    stackRows: { mac: 'Mac', web: 'Web', before: '最初' },
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
      yomi: 'AIの利用枠を、ひと目で',
      momento: '集めた画像を、一か所に',
      moni: 'Macの状態を、ひと目で',
      kayoi: 'スマホも共有フォルダもクラウドも、メニューバーから',
      kakatta: '闲鱼で欲しいものを見張る。Dockerで動く',
    },
  },
};
