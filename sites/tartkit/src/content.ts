// 官网全部文案，按语言分。内容取自 Tartkit 仓库的 README.md / README.zh-CN.md。
// 文案里 `反引号` 包起来的显示成代码，[文字](地址) 显示成链接（见 Landing.astro 的 rich）。
import type { IconName } from '../../../src/data/icons';

export type Lang = 'en' | 'zh';
export const langs: Lang[] = ['en', 'zh'];

export const locales: Record<Lang, { path: string; htmlLang: string; hreflang: string; ogLocale: string; label: string }> = {
  en: { path: '/', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', label: 'English' },
  zh: { path: '/zh/', htmlLang: 'zh-CN', hreflang: 'zh-CN', ogLocale: 'zh_CN', label: '中文' },
};

export const links = {
  download: 'https://github.com/Seaony/Tartkit/releases/latest',
  changelog: 'https://github.com/Seaony/Tartkit/releases',
  github: 'https://github.com/Seaony/Tartkit',
  home: 'https://mameya.app',
};

// 支持的系统，分组和顺序照 README 的表格；kind 对应 App 里的系统图标（public/systems/<kind>-light|dark.svg）
type Name = string | { en: string; zh: string };
export type GroupId = 'readyMac' | 'freshMac' | 'linux' | 'custom';
export const systems: { id: GroupId; items: [kind: string, name: Name][] }[] = [
  {
    id: 'readyMac',
    items: [
      ['macos27', 'macOS 27 Golden Gate'],
      ['macos26', 'macOS 26 Tahoe'],
      ['macos15', 'macOS 15 Sequoia'],
      ['macos14', 'macOS 14 Sonoma'],
    ],
  },
  {
    id: 'freshMac',
    items: [
      ['macos', { en: 'Apple restore images', zh: 'Apple 官方恢复镜像' }],
      ['macos', { en: 'Latest version', zh: '最新版本' }],
      ['ipswURL', { en: 'IPSW download URL', zh: 'IPSW 下载地址' }],
      ['ipswFile', { en: 'Local IPSW file', zh: '本地 IPSW 文件' }],
    ],
  },
  {
    id: 'linux',
    items: [
      ['ubuntu', 'Ubuntu 24.04'],
      ['ubuntu', 'Ubuntu 22.04'],
      ['debian', 'Debian'],
      ['fedora', 'Fedora'],
      ['linuxDisk', { en: 'Blank disk for any ARM64 ISO', zh: '空白磁盘（配合任意 ARM64 ISO）' }],
    ],
  },
  {
    id: 'custom',
    items: [['registry', { en: 'Any Tart image from an OCI registry', zh: 'OCI 镜像仓库里的任意 Tart 镜像' }]],
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
  imagesNote: string;
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
    title: 'Tartkit · Every VM. One menu bar.',
    description:
      'Tartkit is a Mac menu bar app for Tart. Create, run and set up macOS and Linux virtual machines from one panel, and change their settings in a window instead of on the command line.',
    language: 'Language',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
    tagline: 'Every VM. One menu bar.',
    intro: [
      'macOS and Linux virtual machines on your Mac,',
      'created and run from one menu bar panel.',
      'Pick a system and press start,',
      'then change settings in a window instead of on the command line.',
    ],
    requirements: 'macOS 26 or later · Apple silicon · Needs Tart',
    download: 'Download for Mac',
    githubTip: 'GitHub · Seaony/Tartkit',
    changelog: 'Changelog',
    shotAlt: 'Tartkit’s panel open under its menu bar icon, showing macOS, Ubuntu, Fedora and Debian virtual machines',
    forYou: 'Is Tartkit for you?',
    problem:
      'Tart runs macOS and Linux virtual machines on Apple silicon, but every task is a command: which image to clone, which flags to pass to `tart run`, how to share a folder, how to bridge the network. If you don’t use it every day, you end up looking those up again.',
    answer: 'Tartkit puts the same machines in a menu bar panel.',
    fit: 'It’s for you if you run local VMs for testing, CI or trying out a new macOS. If you script everything around `tart` already, you don’t need it.',
    whatItDoes: 'What it does',
    features: [
      ['squaresFour', 'Panel', 'Lives in the menu bar with no Dock icon. Each machine is a card with its system icon and a status dot: green when running, orange when suspended, grey when stopped. Switch to a compact list if you prefer. The menu bar icon changes while machines are running.'],
      ['plusCircle', 'Create', 'Choose macOS or Linux, name it, set CPU and memory, and Tartkit runs the clone or install for you. Versions too new for your Mac’s macOS are greyed out.'],
      ['sliders', 'Settings', 'One set of settings per machine, saved with it: hardware, display, boot mode, network, sharing, disks and devices. Options that aren’t obvious, like the four network modes, suspend support or Rosetta, say what they do and what they need. Start with Temporary Settings… tries a change for one launch without saving it.'],
      ['stack', 'Snapshots', 'Take a snapshot before a risky change and restore it if needed. Export and import `.tvm` archives, pull and push images through an OCI registry, see what the image cache is using and choose where Tart keeps its machines. Every launch writes its own log.'],
      ['terminal', 'Tart', 'Tartkit runs every machine through [Tart](https://tart.run/) by Cirrus Labs. It calls the `tart` you already have and works with the machines already in Tart’s storage. Nothing is converted.'],
      ['appWindow', 'Native', 'SwiftUI and AppKit. Light and dark appearance, English and Simplified Chinese, launch at login and in-app updates.'],
    ],
    supported: 'Supported systems',
    groups: { readyMac: 'Ready-made macOS', freshMac: 'Fresh macOS install', linux: 'Linux', custom: 'Custom image' },
    imagesNote: 'Ready-made images come from Cirrus Labs’ public registry. Fresh macOS installs download Apple’s restore image first and take longer.',
    privacy: 'Privacy',
    privacyRows: [
      ['key', 'Passwords', 'First-boot passwords you choose to save go into your login Keychain, not into a file.'],
      ['laptop', 'Local', 'Machine settings live in `~/Library/Application Support/Tartkit/profiles.json`, logs in `~/Library/Logs/Tartkit/`.'],
      ['wifi', 'Network', 'No analytics. Besides running `tart` on your Mac, Tartkit talks only to the registries and download links you choose, to ipsw.me for the list of macOS restore images, and to GitHub Releases for updates.'],
    ],
    start: 'Quick start',
    steps: [
      ['Install', 'Install Tart with `brew install cirruslabs/cli/tart`, then download the DMG and drag Tartkit into Applications.'],
      ['Create a machine', 'Click the menu bar icon and press +. Search or pick a system, then fill in the name and hardware.'],
      ['Use it', 'Click a card to start the machine, or to bring a running one’s window to the front. Right-click to rename, suspend, stop, connect over SSH or Screen Sharing, open settings or delete.'],
    ],
    early: 'Tartkit is early. If Tart isn’t installed in a usual place, set its path in Settings › General.',
    maker: 'Made by',
    others: 'Other projects',
    backToTop: 'Back to top',
    notFound: { title: 'Page not found · Tartkit', heading: 'Page not found', body: 'There’s nothing at this address.', home: 'Back to Tartkit' },
  },
  zh: {
    title: 'Tartkit · 所有虚拟机，都在菜单栏',
    description:
      'Tartkit 是 Tart 的 Mac 菜单栏应用，在一个面板里新建、运行和设置 macOS 与 Linux 虚拟机，改设置在窗口里点选，不用再查命令行参数。',
    language: '语言',
    toDark: '切换到深色模式',
    toLight: '切换到浅色模式',
    tagline: '所有虚拟机，都在菜单栏',
    intro: ['Mac 上的 macOS 和 Linux 虚拟机，', '在菜单栏的一个面板里新建和运行。', '选好系统，点一下启动；', '改设置在窗口里点选，不用再查命令行参数。'],
    requirements: 'macOS 26 或更高版本 · 仅支持 Apple 芯片 · 需要先装 Tart',
    download: '下载 Mac 版',
    githubTip: 'GitHub · Seaony/Tartkit',
    changelog: '更新日志',
    shotAlt: 'Tartkit 面板从菜单栏图标下展开，列出 macOS、Ubuntu、Fedora 和 Debian 虚拟机',
    forYou: 'Tartkit 适合你吗？',
    problem:
      'Tart 能在 Apple 芯片的 Mac 上跑 macOS 和 Linux 虚拟机，但每件事都要敲一条命令：克隆哪个镜像、`tart run` 带哪些参数、怎么共享文件夹、怎么桥接网络。不是天天用的话，每次都得重新查一遍。',
    answer: 'Tartkit 把这些虚拟机放进菜单栏的一个面板。',
    fit: '如果你要在本机跑虚拟机做测试、跑 CI，或者想先试试新版 macOS，它适合你。如果你已经用脚本把 `tart` 包好了，就不需要它。',
    whatItDoes: '功能',
    features: [
      ['squaresFour', '面板', '常驻菜单栏，不占 Dock。每台虚拟机是一张卡片，带系统图标和状态点：运行中是绿色，已挂起是橙色，已停止是灰色；也可以切换成紧凑的列表。有虚拟机在运行时，菜单栏图标会跟着变化。'],
      ['plusCircle', '新建', '选 macOS 或 Linux，起个名字，设好 CPU 和内存，克隆或安装由 Tartkit 替你跑。本机系统太旧、跑不了的版本会显示成灰色。'],
      ['sliders', '设置', '每台虚拟机一份设置，跟着虚拟机保存：硬件、画面、启动方式、网络、共享、磁盘和设备。不好懂的选项，比如四种网络模式、允许挂起、Rosetta，都写了它做什么、需要什么。想临时试一个改动，用「用临时设置启动…」，只对这一次启动生效，不会保存。'],
      ['stack', '快照', '改动前拍快照，出问题再恢复。导出和导入 `.tvm` 归档，通过 OCI 镜像仓库拉取和推送镜像，看镜像缓存占了多少空间，选择 Tart 把虚拟机存在哪里。每次启动都有单独的日志。'],
      ['terminal', 'Tart', 'Tartkit 通过 Cirrus Labs 的 [Tart](https://tart.run/) 运行每一台虚拟机：调用你已经装好的 `tart`，直接管理 Tart 存储目录里已有的虚拟机，不做任何转换。'],
      ['appWindow', '原生', 'SwiftUI 与 AppKit。支持浅色和深色外观、简体中文和英文，可以开机启动，可以在应用内更新。'],
    ],
    supported: '支持的系统',
    groups: { readyMac: '预装 macOS', freshMac: '全新安装 macOS', linux: 'Linux', custom: '自定义镜像' },
    imagesNote: '预装镜像来自 Cirrus Labs 的公开镜像仓库。全新安装 macOS 要先下载 Apple 的恢复镜像，花的时间更长。',
    privacy: '隐私',
    privacyRows: [
      ['key', '密码', '你选择保存的首次启动密码存进登录钥匙串，不写进文件。'],
      ['laptop', '本机', '虚拟机设置保存在 `~/Library/Application Support/Tartkit/profiles.json`，日志在 `~/Library/Logs/Tartkit/`。'],
      ['wifi', '联网', '不做任何统计。除了在本机运行 `tart`，只访问你选的镜像仓库和下载地址、用来获取 macOS 恢复镜像列表的 ipsw.me，以及检查更新用的 GitHub Releases。'],
    ],
    start: '快速开始',
    steps: [
      ['安装', '先用 `brew install cirruslabs/cli/tart` 装好 Tart，再下载 DMG，把 Tartkit 拖进「应用程序」。'],
      ['新建虚拟机', '点菜单栏的 Tartkit 图标，按 +。搜索或直接点选系统，再填名字和硬件。'],
      ['开始使用', '点卡片启动虚拟机；已经在运行的，会把它的窗口调到最前。右键可以重命名、挂起、停止、用 SSH 或屏幕共享连接、打开设置或删除。'],
    ],
    early: 'Tartkit 还在早期。Tart 没装在常见位置时，到「设置 › 通用」里指定它的路径。',
    maker: '作者',
    others: '其他产品',
    backToTop: '回到顶部',
    notFound: { title: '页面不存在 · Tartkit', heading: '这一页没找到', body: '这个地址下什么也没有。', home: '回到 Tartkit' },
  },
};
