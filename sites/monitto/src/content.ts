// 官网全部文案，按语言分。内容取自 Monitto 仓库的 README.md / README.zh-CN.md。
import type { IconName } from '../../../src/data/icons';

export type Lang = 'en' | 'zh';
export const langs: Lang[] = ['en', 'zh'];

export const locales: Record<Lang, { path: string; htmlLang: string; hreflang: string; ogLocale: string; label: string }> = {
  en: { path: '/', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', label: 'English' },
  zh: { path: '/zh/', htmlLang: 'zh-CN', hreflang: 'zh-CN', ogLocale: 'zh_CN', label: '中文' },
};

export const links = {
  download: 'https://github.com/Seaony/Monitto/releases/latest',
  changelog: 'https://github.com/Seaony/Monitto/releases',
  github: 'https://github.com/Seaony/Monitto',
  home: 'https://mameya.app',
};

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
  sources: string;
  privacy: string;
  privacyRows: [IconName, string, string][];
  start: string;
  steps: [string, string][];
  maker: string;
  others: string;
  backToTop: string;
  notFound: { title: string; heading: string; body: string; home: string };
}

export const t: Record<Lang, Dict> = {
  en: {
    title: 'Monitto · Your Mac, at a glance.',
    description:
      'Monitto is a Mac menu bar app that shows CPU, memory, GPU, network, storage, processes, battery and temperature in one panel, keeps the numbers you care about in the menu bar, and notifies you when one runs too high.',
    language: 'Language',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
    tagline: 'Your Mac, at a glance.',
    intro: [
      'CPU, memory, GPU, network, storage, processes, battery and temperature,',
      'in one menu bar panel.',
      'Keep the few numbers you care about in the menu bar,',
      'and get a notification when one of them runs too high.',
    ],
    requirements: 'macOS 15 or later · Apple silicon and Intel',
    download: 'Download for Mac',
    githubTip: 'GitHub · Seaony/Monitto',
    changelog: 'Changelog',
    shotAlt: 'Monitto’s panel open under its menu bar icon, showing CPU, memory, GPU, network, storage, processes, battery and temperature',
    forYou: 'Is Monitto for you?',
    problem:
      'When your Mac gets slow, hot or loud, the answer is spread across several places: Activity Monitor for CPU and memory, System Settings for the battery, and temperature and fan speed aren’t shown anywhere.',
    answer: 'Monitto puts all of it in one panel under its menu bar icon.',
    fit: 'It’s for you if you want to know what your Mac is doing without opening several apps. If Activity Monitor already tells you enough, you don’t need it.',
    whatItDoes: 'What it does',
    features: [
      ['gauge', 'Panel', 'Host, CPU, memory, GPU, network, storage and processes, plus battery, temperature, fan speed and power draw. Each is a card with a live chart; hover a chart for exact values.'],
      ['squaresFour', 'Layout', 'Drag cards to reorder them, resize them, and hide the ones you don’t need.'],
      ['chartLine', 'Menu bar', 'Pick any of CPU, memory, network, disk, battery and temperature, shown as numbers, small charts or both.'],
      ['bell', 'Alerts', 'Set limits for CPU load, memory, disk space and CPU temperature, and get a notification, with an optional sound.'],
      ['feather', 'Lightweight', 'Every card reads from one shared sample, taken every 0.3 to 5 seconds. Costly readings slow down or pause while the panel is closed.'],
      ['appWindow', 'Native', 'No Dock icon unless you turn it on, and the panel can be zoomed as a whole. Light and dark appearance, English and Simplified Chinese, launch at login and in-app updates.'],
    ],
    sources:
      'Most readings use public macOS interfaces. Temperatures, fan speed and power draw come from sensors Apple doesn’t document, so they can be missing on some Macs.',
    privacy: 'Privacy',
    privacyRows: [
      ['laptop', 'Local', 'Everything is read on your Mac and stays there. Monitto has no account and no analytics.'],
      ['wifi', 'Network', 'It goes online only to check Monitto’s GitHub Releases feed for updates; if that fails, monitoring keeps working.'],
      ['fileText', 'Files', 'Settings are kept in macOS user defaults. The only file Monitto writes is the diagnostics report you export yourself.'],
    ],
    start: 'Quick start',
    steps: [
      ['Install', 'Download the DMG, open it and drag Monitto into Applications.'],
      ['Open the panel', 'Click the Monitto icon in the menu bar. Hover a chart or a number to see what it means; press ⌘R to refresh.'],
      ['Set it up', 'Click Settings ⌘, at the bottom of the panel to choose the appearance and language, the menu bar items, alert limits and which cards to show.'],
    ],
    maker: 'Made by',
    others: 'Other projects',
    backToTop: 'Back to top',
    notFound: { title: 'Page not found · Monitto', heading: 'Page not found', body: 'There’s nothing at this address.', home: 'Back to Monitto' },
  },
  zh: {
    title: 'Monitto · 点一下菜单栏，看清这台 Mac 的状态',
    description:
      'Monitto 是一个 Mac 菜单栏应用，把 CPU、内存、GPU、网络、存储、进程、电池和温度放进一个面板，常看的几项挂在菜单栏上，超过上限就发通知。',
    language: '语言',
    toDark: '切换到深色模式',
    toLight: '切换到浅色模式',
    tagline: '点一下菜单栏，看清这台 Mac 的状态',
    intro: ['CPU、内存、GPU、网络、存储、进程、电池和温度，', '都在一个菜单栏面板里。', '最关心的几项可以直接挂在菜单栏上，', '哪项超过你设的上限，就发通知提醒你。'],
    requirements: 'macOS 15 或更高版本 · 支持 Apple 芯片和 Intel',
    download: '下载 Mac 版',
    githubTip: 'GitHub · Seaony/Monitto',
    changelog: '更新日志',
    shotAlt: 'Monitto 面板从菜单栏图标下展开，显示 CPU、内存、GPU、网络、存储、进程、电池和温度',
    forYou: 'Monitto 适合你吗？',
    problem: 'Mac 变慢、发烫、风扇响的时候，原因散在好几个地方：CPU 和内存在活动监视器里，电池在系统设置里，温度和风扇转速哪里都看不到。',
    answer: 'Monitto 把这些都放进菜单栏图标下的一个面板。',
    fit: '如果你想知道 Mac 在忙什么，又不想开好几个 App，它适合你。活动监视器已经够用的话，就不需要它。',
    whatItDoes: '功能',
    features: [
      ['gauge', '面板', '主机、CPU、内存、GPU、网络、存储、进程，以及电池、温度、风扇转速和功耗，每项一张带实时图表的卡片，鼠标停在图表上能看到具体数值。'],
      ['squaresFour', '布局', '卡片可以拖动排序、调整大小，不看的可以关掉。'],
      ['chartLine', '菜单栏', '从 CPU、内存、网络、磁盘、电池、温度里任选几项，显示成数值、小图表或两者都显示。'],
      ['bell', '提醒', '给 CPU 负载、内存、磁盘空间和 CPU 温度设上限，超过时发通知，也可以带提示音。'],
      ['feather', '不费电', '所有卡片共用一次采样，每 0.3 到 5 秒采一次。开销大的采样在面板关闭时降频或暂停。'],
      ['appWindow', '原生', '默认不显示 Dock 图标，需要时可以打开；面板可以整体缩放。支持浅色和深色外观、英文和简体中文、登录时启动和应用内更新。'],
    ],
    sources: '大部分数据来自 macOS 的公开接口。温度、风扇转速和功耗来自 Apple 没有公开说明的传感器，部分 Mac 上可能读不到。',
    privacy: '隐私',
    privacyRows: [
      ['laptop', '本机', '所有数据都在本机读取，不会上传。Monitto 不需要账号，也没有统计。'],
      ['wifi', '联网', '只有检查更新时会联网，访问 Monitto 的 GitHub Releases；检查失败也不影响监控。'],
      ['fileText', '文件', '设置存在 macOS 的偏好设置里。Monitto 写入的文件只有你自己导出的诊断报告。'],
    ],
    start: '快速开始',
    steps: [
      ['安装', '下载 DMG，打开后把 Monitto 拖进「应用程序」。'],
      ['打开面板', '点菜单栏里的 Monitto 图标。鼠标停在图表或数值上能看到它的含义，按 ⌘R 立即刷新。'],
      ['按需设置', '点面板底部的「设置 ⌘,」，选外观和语言、菜单栏项目、提醒上限和首页显示哪些卡片。'],
    ],
    maker: '作者',
    others: '其他产品',
    backToTop: '回到顶部',
    notFound: { title: '页面不存在 · Monitto', heading: '这一页没找到', body: '这个地址下什么也没有。', home: '回到 Monitto' },
  },
};
