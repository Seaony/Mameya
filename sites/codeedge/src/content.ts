// 官网全部文案，按语言分。内容取自 CodeEdge 仓库的 README.md / README.zh-CN.md。
import type { IconName } from '../../../src/data/icons';

export type Lang = 'en' | 'zh';
export const langs: Lang[] = ['en', 'zh'];

export const locales: Record<Lang, { path: string; htmlLang: string; hreflang: string; ogLocale: string; label: string }> = {
  en: { path: '/', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', label: 'English' },
  zh: { path: '/zh/', htmlLang: 'zh-CN', hreflang: 'zh-CN', ogLocale: 'zh_CN', label: '中文' },
};

export const links = {
  download: 'https://github.com/Seaony/CodeEdge/releases/latest',
  changelog: 'https://github.com/Seaony/CodeEdge/releases',
  github: 'https://github.com/Seaony/CodeEdge',
  codexbar: 'https://github.com/steipete/CodexBar',
  home: 'https://mameya.app',
};

// 服务商名字两种语言一样；README 里列了将近一百个，这里只挑最常见的一组做标签
export const providers = [
  'Codex', 'Claude', 'Cursor', 'Gemini', 'Copilot', 'Kiro', 'Windsurf', 'Amp', 'Zed', 'Warp',
  'OpenAI', 'OpenRouter', 'DeepSeek', 'Mistral', 'Kimi Code', 'z.ai / GLM', 'MiniMax', 'Ollama',
];

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
  worksWith: string;
  moreCount: (n: number) => string;
  less: string;
  howRead: string;
  credit: [string, string];
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
    title: 'CodeEdge · Code to the edge.',
    description:
      'CodeEdge is a Mac app that pins Codex, Claude, Cursor, Gemini, Copilot, Kiro and 100+ more AI services to the edge of your screen: remaining quota, reset times, today’s tokens and estimated spend.',
    language: 'Language',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
    tagline: 'Code to the edge.',
    intro: [
      'Codex, Claude, Cursor, Gemini, Copilot, Kiro and 100+ more,',
      'pinned to the edge of your screen.',
      'Remaining quota, reset times, today’s tokens and estimated spend,',
      'without opening a single dashboard.',
    ],
    requirements: 'macOS 26.5 or later · Apple silicon and Intel',
    download: 'Download for Mac',
    githubTip: 'GitHub · Seaony/CodeEdge',
    changelog: 'Changelog',
    shotAlt: 'CodeEdge’s rail docked to the right edge of the screen, with Claude’s quota details open',
    forYou: 'Is CodeEdge for you?',
    problem:
      'Every AI service shows its limits somewhere different: a settings page, a CLI command, a billing console, a usage tab three clicks deep. When you pay for several of them, checking what’s left becomes a chore, and you usually find out at the worst moment, when a request is refused.',
    answer: 'CodeEdge keeps all of it in a slim rail at the edge of your screen.',
    fit: 'It’s for you if you use more than one AI tool or plan. If you use one service and its own usage page is enough, you don’t need it.',
    whatItDoes: 'What it does',
    features: [
      ['sidebar', 'Rail', 'One ring per provider, filled to the share of quota that’s left. It floats at either edge of the screen, stays there across Spaces and remembers its position.'],
      ['chartDonut', 'Details', 'Click a ring for the plan, every quota window (session, 5-hour, weekly, monthly, credits, balance), how much of each is used, and when it resets.'],
      ['coins', 'Spend', 'Today’s and the last 30 days’ tokens from the local session logs of Codex, Claude Code, Pi and DeepSeek, priced with each model’s rates.'],
      ['plugs', 'Real data', 'Quotas come from each provider’s own source: its API, a local account, its CLI or a browser session. Nothing is guessed from chat text or logs.'],
      ['appWindow', 'Native', 'SwiftUI and AppKit. System, dark and light appearance, English and Simplified Chinese, launch at login and in-app updates.'],
    ],
    worksWith: 'Supported providers',
    moreCount: (n) => `+${n} more`,
    less: 'Show less',
    howRead: 'Each provider is read the way its service allows: a local account, a CLI, an API key, a browser session or a custom endpoint.',
    credit: [' Provider logic follows ', '.'],
    privacy: 'Privacy',
    privacyRows: [
      ['key', 'Keys', 'Stored in the macOS Keychain.'],
      ['laptop', 'Local', 'Usage caches, preferences and the rail’s position stay on your Mac.'],
      ['fileText', 'Logs', 'Read only for token and cost totals. Chat and code text are never parsed into quotas.'],
      ['wifi', 'Network', 'Only each provider’s own data source, plus GitHub Releases for updates.'],
    ],
    start: 'Quick start',
    steps: [
      ['Install', 'Download the DMG and drag CodeEdge into Applications.'],
      ['Enable providers', 'In Settings → Providers, turn on the services you use.'],
      ['Glance', 'Rings appear in the rail as providers report data. Click one for details.'],
    ],
    maker: 'Made by',
    others: 'Other projects',
    backToTop: 'Back to top',
    notFound: { title: 'Page not found · CodeEdge', heading: 'Page not found', body: 'There’s nothing at this address.', home: 'Back to CodeEdge' },
  },
  zh: {
    title: 'CodeEdge · 用到极限，心里有数',
    description:
      'CodeEdge 是一个 Mac 应用，把 Codex、Claude、Cursor、Gemini、Copilot、Kiro 等 100 多个 AI 服务的剩余额度、重置时间、今日 Token 和预估花费，固定在屏幕边缘。',
    language: '语言',
    toDark: '切换到深色模式',
    toLight: '切换到浅色模式',
    tagline: '用到极限，心里有数',
    intro: [
      'Codex、Claude、Cursor、Gemini、Copilot、Kiro 等 100 多个服务，',
      '固定在屏幕边缘。',
      '剩余额度、重置时间、今日 Token 和预估花费，',
      '不用再打开任何一个控制台。',
    ],
    requirements: 'macOS 26.5 或更高版本 · 支持 Apple 芯片和 Intel',
    download: '下载 Mac 版',
    githubTip: 'GitHub · Seaony/CodeEdge',
    changelog: '更新日志',
    shotAlt: '停靠在屏幕右边缘的 CodeEdge 侧边栏，展开了 Claude 的额度详情',
    forYou: 'CodeEdge 适合你吗？',
    problem:
      '每个 AI 服务把用量放在不同的地方：设置页、命令行、账单后台，或者点三层才能找到的用量标签页。同时订阅好几个时，查剩余额度就成了体力活，而且往往要等请求被拒才发现用完了。',
    answer: 'CodeEdge 把这些都收进屏幕边缘的一条细栏里。',
    fit: '如果你同时用不止一个 AI 工具或套餐，它适合你。如果只用一个服务、它自己的用量页就够用，那你不需要它。',
    whatItDoes: '功能',
    features: [
      ['sidebar', '侧边栏', '每个 Provider 一个圆环，按剩余额度比例填充。悬浮在屏幕任意一侧，切换桌面空间也一直都在，下次启动会恢复原位。'],
      ['chartDonut', '详情', '点击圆环会打开一张紧凑卡片：套餐、所有额度窗口（会话、5 小时、每周、每月、点数、余额）、各自用了多少，以及什么时候重置。'],
      ['coins', '花费', '从 Codex、Claude Code、Pi 和 DeepSeek 的本地会话日志统计今天和最近 30 天的 Token，并按各模型价格计算金额。'],
      ['plugs', '真实数据', '额度来自各服务自己的数据源：接口、本机账号、命令行或浏览器会话，从不根据聊天内容或日志去猜。'],
      ['appWindow', '原生', 'SwiftUI 与 AppKit。支持系统、深色、浅色外观，英文和简体中文，登录时启动和应用内更新。'],
    ],
    worksWith: '支持的 Provider',
    moreCount: (n) => `还有 ${n} 个`,
    less: '收起',
    howRead: '每个 Provider 按对应服务允许的方式读取：本机账号、命令行、API Key、浏览器会话或自定义接口。',
    credit: ['Provider 数据逻辑参考 ', '。'],
    privacy: '隐私',
    privacyRows: [
      ['key', '密钥', '保存在 macOS 钥匙串中。'],
      ['laptop', '本机', '用量缓存、偏好设置和侧边栏位置都只保存在本机。'],
      ['fileText', '日志', '只用于统计 Token 和金额，聊天内容和代码文本不会被解析成额度。'],
      ['wifi', '联网', '只访问各 Provider 自己的数据源，以及用于更新的 GitHub Releases。'],
    ],
    start: '快速开始',
    steps: [
      ['安装', '下载 DMG，把 CodeEdge 拖进「应用程序」。'],
      ['启用 Provider', '在设置的 Providers 里，打开你在用的服务。'],
      ['看一眼', 'Provider 返回数据后，圆环就会出现在侧边栏里，点开看详情。'],
    ],
    maker: '作者',
    others: '其他产品',
    backToTop: '回到顶部',
    notFound: { title: '页面不存在 · CodeEdge', heading: '这一页没找到', body: '这个地址下什么也没有。', home: '回到 CodeEdge' },
  },
};
