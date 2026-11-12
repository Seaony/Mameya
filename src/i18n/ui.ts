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
  aboutRows: { location: [string, string]; focus: [string, string]; work: [string, (live: number, dev: number) => string] };
  stack: string;
  stackRows: { mac: string; web: string; before: string };
  projects: string;
  projectsSummary: (live: number, dev: number) => string;
  inDevelopment: string;
  socials: Record<SocialId, { name: string; scan: string }>;
  qrCode: string;
  backToTop: string;
  header: { site: string; language: string; darkMode: string };
  notFound: {
    title: string;
    badge: string;
    heading: string;
    body: string;
    home: string;
    report: string;
    suggest: string;
  };
  apps: Record<AppId, string>;
}

export const ui: Record<Lang, Dict> = {
  en: {
    title: 'Seaony · Native Mac apps',
    description:
      'Seaony is a full-stack developer in Singapore who makes native Mac apps: Yomi, Momento, Moni, Kayoi and Mekke.',
    tagline: 'Building native apps for the Mac.',
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
      work: ['Apps', (live, dev) => `${live} shipped, ${dev} in progress`],
    },
    stack: 'Stack',
    stackRows: { mac: 'Mac', web: 'Web', before: 'Before' },
    projects: 'Projects',
    projectsSummary: (live, dev) => `${live} shipped · ${dev} in progress`,
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
      darkMode: 'Dark mode',
    },
    notFound: {
      title: 'Page not found · Seaony',
      badge: 'No めっけ this time · nothing here',
      heading: 'Page not found',
      body: 'The link may be wrong, or the page has moved.',
      home: 'Back to home',
      report: 'Tell me what broke',
      suggest: 'Maybe you were looking for',
    },
    apps: {
      yomi: 'Every AI quota. One glance.',
      momento: 'Every image. In one place.',
      moni: 'A compact menu bar monitor for macOS.',
      kayoi: 'Every location. One menu bar.',
      mekke: 'Found it. Before anyone else.',
      kakatta: 'Watches Xianyu for what you want. Runs in Docker.',
    },
  },
  zh: {
    title: 'Seaony · 在做 Mac 原生应用',
    description: 'Seaony，全栈开发者，人在新加坡，做 Mac 原生应用：Yomi、Momento、Moni、Kayoi 和 Mekke。',
    tagline: '在做 Mac 原生应用。',
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
      work: ['作品', (live, dev) => `${live} 款已上线，${dev} 款开发中`],
    },
    stack: '技术栈',
    stackRows: { mac: 'Mac', web: 'Web', before: '起步' },
    projects: '产品',
    projectsSummary: (live, dev) => `${live} 款已上线 · ${dev} 款开发中`,
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
      darkMode: '深色模式',
    },
    notFound: {
      title: '页面不存在 · Seaony',
      badge: 'めっけ失败 · 这里什么也没有',
      heading: '这一页没找到',
      body: '链接可能写错了，或者这个页面已经搬走了。',
      home: '回到首页',
      report: '告诉我哪里坏了',
      suggest: '也许你在找',
    },
    apps: {
      yomi: '所有 AI 额度，一眼看清',
      momento: '灵感图片，收在一处',
      moni: '一眼看清 Mac 状态',
      kayoi: '手机、共享、网盘，都在菜单栏',
      mekke: 'めっけ！比别人先看到',
      kakatta: '帮你盯着闲鱼，Docker 自己部署',
    },
  },
  ja: {
    title: 'Seaony · Macのネイティブアプリ',
    description:
      'シンガポール在住のフルスタックエンジニア、Seaony。Macのネイティブアプリを作っています。Yomi、Momento、Moni、Kayoi、Mekke。',
    tagline: 'Macのネイティブアプリを作っています。',
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
      work: ['作品', (live, dev) => `公開中${live}本、開発中${dev}本`],
    },
    stack: '技術スタック',
    stackRows: { mac: 'Mac', web: 'Web', before: '最初' },
    projects: 'プロダクト',
    projectsSummary: (live, dev) => `公開中 ${live} · 開発中 ${dev}`,
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
      darkMode: 'ダークモード',
    },
    notFound: {
      title: 'ページが見つかりません · Seaony',
      badge: 'めっけ失敗・ここには何もありません',
      heading: 'ページが見つかりません',
      body: 'リンクが間違っているか、ページが移動したのかもしれません。',
      home: 'ホームへ戻る',
      report: '壊れたリンクを知らせる',
      suggest: 'お探しのものはこちらかも',
    },
    apps: {
      yomi: 'AIの利用枠を、ひと目で',
      momento: '集めた画像を、一か所に',
      moni: 'Macの状態を、ひと目で',
      kayoi: 'スマホも共有フォルダもクラウドも、メニューバーから',
      mekke: 'めっけ！誰よりも先に見つける',
      kakatta: '闲鱼で欲しいものを見張る。Dockerで動く',
    },
  },
};
