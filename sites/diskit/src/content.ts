// 官网全部文案，按语言分。内容取自 Diskit 仓库的 README.md / README.zh-CN.md。
import type { IconName } from '../../../src/data/icons';

export type Lang = 'en' | 'zh';
export const langs: Lang[] = ['en', 'zh'];

export const locales: Record<Lang, { path: string; htmlLang: string; hreflang: string; ogLocale: string; label: string }> = {
  en: { path: '/', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', label: 'English' },
  zh: { path: '/zh/', htmlLang: 'zh-CN', hreflang: 'zh-CN', ogLocale: 'zh_CN', label: '中文' },
};

export const links = {
  download: 'https://github.com/Seaony/Diskit/releases/latest',
  changelog: 'https://github.com/Seaony/Diskit/releases',
  github: 'https://github.com/Seaony/Diskit',
  home: 'https://mameya.app',
};

// 支持的位置，分组和顺序照 README 的表格；kind 对应 App 里的类型图标（public/types/<kind>-light|dark.svg）
type Name = string | { en: string; zh: string };
export type GroupId = 'devices' | 'shares' | 'drives' | 'experimental' | 'storage';
export const locations: { id: GroupId; items: [kind: string, name: Name][] }[] = [
  {
    id: 'devices',
    items: [
      ['androidUSB', { en: 'Android phone (USB)', zh: '安卓手机（USB）' }],
      ['androidWiFi', { en: 'Android phone (wireless debugging)', zh: '安卓手机（无线调试）' }],
      ['ricohGR', { en: 'Ricoh GR IV', zh: '理光 GR IV' }],
      ['cameraUSB', { en: 'USB cameras', zh: 'USB 相机' }],
    ],
  },
  {
    id: 'shares',
    items: [
      ['smb', 'SMB'],
      ['webdav', 'WebDAV'],
      ['nfs', 'NFS'],
    ],
  },
  {
    id: 'drives',
    items: [
      ['aliyunDrive', { en: 'Aliyun Drive', zh: '阿里云盘' }],
      ['baiduDrive', { en: 'Baidu Netdisk', zh: '百度网盘' }],
      ['drive115', { en: '115 Drive', zh: '115 网盘' }],
      ['drive123', { en: '123 Drive', zh: '123 云盘' }],
      ['oneDrive', 'OneDrive'],
      ['googleDrive', 'Google Drive'],
      ['dropbox', 'Dropbox'],
    ],
  },
  {
    id: 'experimental',
    items: [
      ['quark', { en: 'Quark Drive', zh: '夸克网盘' }],
      ['ucDrive', { en: 'UC Drive', zh: 'UC 网盘' }],
      ['tianyiDrive', { en: 'Tianyi Cloud', zh: '天翼云盘' }],
      ['mobileCloud', { en: 'Mobile Cloud', zh: '移动云盘' }],
      ['thunderDrive', { en: 'Xunlei Drive', zh: '迅雷云盘' }],
      ['pikPak', 'PikPak'],
      ['lanzou', { en: 'Lanzou Cloud (read-only)', zh: '蓝奏云（只读）' }],
    ],
  },
  {
    id: 'storage',
    items: [
      ['s3', 'Amazon S3'],
      ['cloudflareR2', 'Cloudflare R2'],
      ['aliyunOSS', { en: 'Alibaba Cloud OSS', zh: '阿里云 OSS' }],
      ['tencentCOS', { en: 'Tencent Cloud COS', zh: '腾讯云 COS' }],
      ['qiniuKodo', { en: 'Qiniu Kodo', zh: '七牛 Kodo' }],
      ['minIO', 'MinIO'],
      ['backblazeB2', 'Backblaze B2'],
    ],
  },
];

export const nameIn = (name: Name, lang: Lang) => (typeof name === 'string' ? name : name[lang]);

interface Dict {
  title: string;
  description: string;
  language: string;
  toDark: string;
  toLight: string;
  tagline: string;
  // 介绍按句意分行，每个元素是一行
  intro: string[];
  requirements: string;
  download: string;
  githubTip: string;
  changelog: string;
  shotAlt: string;
  forYou: string;
  problem: string;
  answer: string;
  fit: string;
  whatItDoes: string;
  // 每行：图标、标签、说明
  features: [IconName, string, string][];
  supported: string;
  groups: Record<GroupId, string>;
  webdavPresets: string;
  signIn: string;
  privacy: string;
  privacyRows: [IconName, string, string][];
  start: string;
  steps: [string, string][];
  early: string;
  maker: string;
  others: string;
  backToTop: string;
  notFound: { title: string; heading: string; body: string; home: string };
}

export const t: Record<Lang, Dict> = {
  en: {
    title: 'Diskit · Every location. One menu bar.',
    description:
      'Diskit is a Mac menu bar app that keeps Android phones, cameras, network shares, cloud drives and object storage in one panel, with their status and free space, and mounts your shares in Finder with one click.',
    language: 'Language',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
    tagline: 'Every location. One menu bar.',
    intro: [
      'Android phones, cameras, network shares, cloud drives and object storage,',
      'saved in one panel.',
      'Click the menu bar icon to see what’s connected and how much space is left,',
      'and mount your shares in Finder with one click.',
    ],
    requirements: 'macOS 26 or later · Apple silicon and Intel',
    download: 'Download for Mac',
    githubTip: 'GitHub · Seaony/Diskit',
    changelog: 'Changelog',
    shotAlt: 'Diskit’s panel open under its menu bar icon, showing a NAS, a phone, a camera and several cloud drives',
    forYou: 'Is Diskit for you?',
    problem:
      'Your files live in many places: a NAS at home, a phone on your desk, a camera in your bag, a few cloud drives and a storage bucket. Each one has its own app, its own sign-in and its own way to connect, and you end up looking them up again every time.',
    answer: 'Diskit keeps them all in one panel in the menu bar.',
    fit: 'It’s for you if you move files between several devices and services. If everything you use already lives in one cloud drive with its own Mac app, you don’t need it.',
    whatItDoes: 'What it does',
    features: [
      ['squaresFour', 'Panel', 'Lives in the menu bar with no Dock icon. Each location is a card or a row with a status dot and the space left. Drag to reorder, right-click for actions, or use the keyboard: arrow keys, Return, ⌘N to add, ⌘E to edit.'],
      ['hardDrives', 'Shares', 'SMB, WebDAV and NFS mount through macOS, so Finder and every other app see normal volumes. Diskit lists the shares on an SMB server, checks your password before saving, and leaves mounts in place when you quit.'],
      ['deviceMobile', 'Phones', 'Android phones connect over USB debugging, or wireless debugging with a pairing code on Android 11 and later. Diskit speaks ADB itself: no adb to install, nothing to add to the phone.'],
      ['camera', 'Cameras', 'Ricoh GR IV and other USB cameras are read through macOS Image Capture. Photos stay untouched unless the camera allows deleting.'],
      ['appWindow', 'Native', 'SwiftUI and AppKit. Light and dark appearance, English and Simplified Chinese, launch at login and in-app updates.'],
    ],
    supported: 'Supported locations',
    groups: { devices: 'Devices', shares: 'Shares', drives: 'Cloud drives', experimental: 'Experimental drives', storage: 'Object storage' },
    webdavPresets: 'WebDAV works over HTTP and HTTPS, with presets for Jianguoyun, Nextcloud, ownCloud, Synology, QNAP and OpenList.',
    signIn:
      'Official cloud drives sign in through each provider’s own authorisation page. Experimental drives sign in through the provider’s website or with your account and password, and use unofficial interfaces, so they may stop working when the provider changes its site.',
    privacy: 'Privacy',
    privacyRows: [
      ['key', 'Keys', 'Passwords, tokens and cookies are stored in your login Keychain.'],
      ['laptop', 'Local', 'Saved locations and caches stay on your Mac, and the config file holds no secrets. Error logs are kept for 7 days.'],
      ['wifi', 'Network', 'No analytics. Besides looking for phones, cameras and shares on your network and over USB, Diskit talks only to what you add, plus GitHub Releases for updates.'],
    ],
    start: 'Quick start',
    steps: [
      ['Install', 'Download the DMG and drag Diskit into Applications.'],
      ['Add a location', 'Click the menu bar icon, press +, pick a type and fill it in. Devices and shares Diskit finds come first.'],
      ['Use it', 'Click a card to mount or eject. Mounted locations show up in Finder’s sidebar under Locations.'],
    ],
    early:
      'Diskit is early. Phones, USB cameras, cloud drives and object storage mount in Finder through Diskit’s own file system extension, which you turn on once in System Settings when the panel asks. Many integrations haven’t been checked against real accounts and devices yet.',
    maker: 'Made by',
    others: 'Other projects',
    backToTop: 'Back to top',
    notFound: { title: 'Page not found · Diskit', heading: 'Page not found', body: 'There’s nothing at this address.', home: 'Back to Diskit' },
  },
  zh: {
    title: 'Diskit · 手机、共享、网盘，都在菜单栏',
    description:
      'Diskit 是一个 Mac 菜单栏应用，把安卓手机、相机、局域网共享、网盘和对象存储收进同一个面板，一眼看到连接状态和剩余空间，共享一键挂载到 Finder。',
    language: '语言',
    toDark: '切换到深色模式',
    toLight: '切换到浅色模式',
    tagline: '手机、共享、网盘，都在菜单栏',
    intro: [
      '安卓手机、相机、局域网共享、网盘和对象存储，',
      '收进同一个面板。',
      '点一下菜单栏图标，就能看到哪些已连接、还剩多少空间，',
      '共享一键挂载到 Finder。',
    ],
    requirements: 'macOS 26 或更高版本 · 支持 Apple 芯片和 Intel',
    download: '下载 Mac 版',
    githubTip: 'GitHub · Seaony/Diskit',
    changelog: '更新日志',
    shotAlt: 'Diskit 面板从菜单栏图标下展开，列出 NAS、手机、相机和多个网盘',
    forYou: 'Diskit 适合你吗？',
    problem:
      '文件散在很多地方：家里的 NAS、桌上的手机、包里的相机，还有几个网盘和一个存储桶。每个都有自己的 App、自己的登录和自己的连接方式，每次用都要重新找一遍。',
    answer: 'Diskit 把它们都放进菜单栏的一个面板里。',
    fit: '如果你经常在多台设备和多个服务之间倒腾文件，它适合你。如果你只用一个网盘，而且它已经有自己的 Mac App，就不需要它。',
    whatItDoes: '功能',
    features: [
      ['squaresFour', '面板', '常驻菜单栏，不占 Dock。每个位置是一张卡片或一行，带状态点和剩余空间。可以拖动排序、右键操作，也可以用键盘：方向键选择，回车执行，⌘N 添加，⌘E 编辑。'],
      ['hardDrives', '共享', 'SMB、WebDAV、NFS 通过 macOS 挂载，Finder 和其他 App 都把它们当作普通的盘。Diskit 能列出 SMB 服务器上的共享，保存前先验证密码，退出时保留挂载。'],
      ['deviceMobile', '手机', '安卓手机通过 USB 调试连接，Android 11 及以上也可以用配对码走无线调试。Diskit 自己实现了 ADB 协议，不用装 adb，手机上也不用装任何东西。'],
      ['camera', '相机', '理光 GR IV 和其他 USB 相机通过 macOS 的图像捕捉读取。除非相机允许删除，否则不会改动照片。'],
      ['appWindow', '原生', 'SwiftUI 与 AppKit。支持浅色和深色外观、简体中文和英文，可以开机启动，可以在应用内更新。'],
    ],
    supported: '支持的位置',
    groups: { devices: '设备', shares: '共享', drives: '网盘', experimental: '实验性网盘', storage: '对象存储' },
    webdavPresets: 'WebDAV 支持 HTTP 和 HTTPS，内置坚果云、Nextcloud、ownCloud、群晖、威联通和 OpenList 预设。',
    signIn:
      '官方网盘通过各自的授权页面登录。实验性网盘通过服务商网页或账号密码登录，使用非官方接口，服务商改版后可能暂时失效。',
    privacy: '隐私',
    privacyRows: [
      ['key', '密钥', '密码、令牌和 Cookie 保存在登录钥匙串里。'],
      ['laptop', '本机', '已保存的位置和缓存都只在本机，配置文件里不含任何密钥。错误日志保留 7 天。'],
      ['wifi', '联网', '不做任何统计。除了在局域网和 USB 上发现手机、相机和共享，只和你添加的设备、服务通信，以及访问 GitHub Releases 检查更新。'],
    ],
    start: '快速开始',
    steps: [
      ['安装', '下载 DMG，把 Diskit 拖进「应用程序」。'],
      ['添加位置', '点菜单栏图标，按 +，选择类型并按提示填写。已发现的设备和共享排在最前。'],
      ['开始使用', '点卡片挂载或推出。挂载后的位置会出现在 Finder 侧栏的「位置」里。'],
    ],
    early:
      'Diskit 还在早期。手机、USB 相机、网盘和对象存储通过 Diskit 自带的文件系统扩展挂载到 Finder，第一次挂载前按面板上的提示在系统设置里打开它。很多接入还没有用真实账号和设备验证过。',
    maker: '作者',
    others: '其他产品',
    backToTop: '回到顶部',
    notFound: { title: '页面不存在 · Diskit', heading: '这一页没找到', body: '这个地址下什么也没有。', home: '回到 Diskit' },
  },
};
