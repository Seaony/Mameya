// 官网全部文案，按语言分。内容取自 Momento 仓库的 README.md / README.zh-CN.md。
// 文案里 `反引号` 包起来的显示成代码，[文字](地址) 显示成链接（见 Landing.astro 的 rich）。
import type { IconName } from '../../../src/data/icons';

export type Lang = 'en' | 'zh';
export const langs: Lang[] = ['en', 'zh'];

export const locales: Record<Lang, { path: string; htmlLang: string; hreflang: string; ogLocale: string; label: string }> = {
  en: { path: '/', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', label: 'English' },
  zh: { path: '/zh/', htmlLang: 'zh-CN', hreflang: 'zh-CN', ogLocale: 'zh_CN', label: '中文' },
};

export const links = {
  download: 'https://github.com/Seaony/Momento/releases/latest',
  changelog: 'https://github.com/Seaony/Momento/releases',
  github: 'https://github.com/Seaony/Momento',
  extension: 'https://github.com/Seaony/Momento-Chomre-Extension',
  home: 'https://mameya.app',
};

// 三个平台，顺序和 README 的徽章一样
export const platforms: [IconName, string][] = [
  ['apple', 'macOS 13+'],
  ['windows', 'Windows 10+'],
  ['linux', 'Linux · GTK 3'],
];

// 支持的格式，分组照 README 的表格；格式名各语言一样，组名和说明在下面按语言写。
// 每组一个类别图标，组里每个标签前都放，颜色按组区分（见 Landing.astro 的 .fmt-*）
export type FormatId = 'images' | 'raw' | 'videos' | 'live';
export const formats: { id: FormatId; icon: IconName; items: string[] }[] = [
  { id: 'images', icon: 'fileImage', items: ['JPEG', 'PNG', 'GIF', 'WebP', 'TIFF', 'BMP', 'HEIC', 'AVIF'] },
  { id: 'raw', icon: 'aperture', items: ['DNG', 'CR2', 'CR3', 'NEF', 'ARW', 'RAF', 'ORF', 'RW2', 'PSD', 'JPEG 2000', 'TGA', 'EXR', 'HDR'] },
  { id: 'videos', icon: 'fileVideo', items: ['MP4', 'MOV', 'M4V', 'WebM'] },
  { id: 'live', icon: 'livePhoto', items: ['HEIC + MOV', 'JPEG + MOV'] },
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
  free: string;
  download: string;
  githubTip: string;
  extension: string;
  changelog: string;
  shotAlt: string;
  forYou: string;
  problem: string;
  answer: string;
  fit: string;
  whatItDoes: string;
  // 每行：图标、标签、说明
  features: [IconName, string, string][];
  // 浏览器扩展：开场一句，四种保存方式（图标、标签、说明），限制，手动安装，按钮
  ext: {
    title: string;
    intro: string;
    rows: [IconName, string, string][];
    limits: string;
    // 手动安装：标题、副标题、三步（每步配一个小示意图）；mock 是示意图里 Chrome 界面上的字
    install: { title: string; sub: string; steps: [string, string, string] };
    mock: { extensions: string; devMode: string; load: string };
    get: string;
  };
  supported: string;
  groups: Record<FormatId, { label: string; note?: string }>;
  privacy: string;
  privacyRows: [IconName, string, string][];
  start: string;
  steps: [string, string][];
  windowsNote: string;
  maker: string;
  others: string;
  backToTop: string;
  notFound: { title: string; heading: string; body: string; home: string };
}

export const t: Record<Lang, Dict> = {
  en: {
    title: 'Momento · Your image library, on your own disk.',
    description:
      'Momento is a local image library for macOS, Windows and Linux. Keep reference images, screenshots, photos and short videos in one folder on your disk, organize them by color, tag and folder, with no account and nothing uploaded.',
    language: 'Language',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
    tagline: 'Your image library, on your own disk.',
    intro: [
      'Reference images, screenshots, photos and short videos, in one local library.',
      'Organize them by color, tag and folder, and find them again when you need them,',
      'with no account and nothing uploaded anywhere.',
    ],
    free: 'Free and open source',
    download: 'Download',
    githubTip: 'GitHub · Seaony/Momento',
    extension: 'Browser extension',
    changelog: 'Changelog',
    shotAlt: 'The Momento main window: a folder sidebar on the left, a three-column masonry grid of photos in the middle, and an inspector on the right showing the selected image’s palette and tags',
    forYou: 'Is Momento for you?',
    problem:
      'Saved images scatter fast: a batch in Downloads, a pile of screenshots on the desktop, a list of bookmarked links. When you need one, you remember “that pinkish building photo” but not where it went.',
    answer: 'Momento keeps them in one library, and the library is a single `.momento` folder on your disk.',
    fit: 'It’s for you if you collect references, screenshots or photos and would rather not hand them to a cloud service. If you only want your photos synced between your phone and computer, your system’s photo app suits you better.',
    whatItDoes: 'What it does',
    features: [
      ['squaresFour', 'Browse', 'Masonry for scanning many images at once, justified rows for neat full-width rows, and a list for names and sizes. Press Space to open a preview that zooms, pans and plays animated images and videos; press H to flip and G for grayscale. Or run a full-screen slideshow of the current list.'],
      ['palette', 'Find', 'Every image gets an 8-color palette on import. Filter by color, tag and extension, or search names, notes, source links and tags. Smart folders, which you turn on in Settings › Sidebar, collect images by rules, such as “PNGs wider than 2000 pixels with blue in the palette”.'],
      ['folders', 'Organize', 'Nested folders, tags, favorites and notes, all editable for many images at once. Copy tags from one image and paste them onto others. Batch rename numbers files from a template or finds and replaces text.'],
      ['copy', 'Duplicates', 'Find Similar Images groups images that look the same. Pick one to keep, and the tags, folders and notes of the others are merged into it before they go to the trash. Export to JPEG or PNG with an optional longest-edge limit, and save the settings you use often as presets.'],
      ['trayArrowDown', 'Import', 'Drag in, paste, or choose files or whole folders, with duplicates detected by content. Watched folders import anything you put in them and move the originals to the trash. Keywords embedded in images can become tags.'],
      ['appWindow', 'Native', 'macOS, Windows and Linux share the same native interface, in English, Chinese and Japanese. A password lock, a menu bar icon, launch at login, customizable shortcuts, and light and dark appearances.'],
    ],
    ext: {
      title: 'Browser extension',
      intro: 'Found an image worth keeping? Right-click it and choose Save to Momento, with no downloading and dragging it in later. The extension works in Chrome and needs Momento open on your computer with a library open.',
      rows: [
        ['cursorClick', 'One image', 'Right-click an image, a video or an image link. The extension looks for the largest version it can find: the biggest size in srcset, the original in the page’s data, and original-size rules for sites like Zhihu, Douban, Lofter, Bilibili, Unsplash, Pexels, ArtStation and Flickr.'],
        ['stack', 'Whole post', 'On Xiaohongshu, Instagram, Pixiv, Weibo, X, Pinterest, Behance, Dribbble, Zcool, Huaban and ArtStation, open a post’s own page, right-click and choose Save Entire Post to Momento. Its images and mp4 videos are saved together; a Live Photo comes in as a photo and a separate video. Xiaohongshu notes and Instagram posts also get a Momento button that does this in one click.'],
        ['listChecks', 'Whole page', 'Right-click the page and choose Save Images on This Page…, or click Momento in the extensions menu, to list the images the extension finds. Filter by size and format, Shift-click to select a range, and save them in one go.'],
        ['camera', 'Screenshot', 'Right-click an empty spot and choose Save Screenshot of Visible Area. What you see is saved as a PNG.'],
      ],
      limits: 'Each saved image keeps the page it came from, so you can open the source again from Momento. Streamed videos such as Bilibili, Douyin and live replays can’t be saved, and images that need a login to view sometimes can’t be downloaded.',
      install: {
        title: 'Install by hand',
        sub: 'Takes about a minute.',
        steps: [
          'Download the Manual-Install zip from the latest release and unzip it somewhere you’ll keep.',
          'Open `chrome://extensions` and turn on Developer mode.',
          'Click Load unpacked and choose the extension folder.',
        ],
      },
      mock: { extensions: 'Extensions', devMode: 'Developer mode', load: 'Load unpacked' },
      get: 'Get the extension',
    },
    supported: 'Supported formats',
    groups: {
      images: { label: 'Images' },
      raw: { label: 'Camera RAW and more', note: 'Full support on macOS. Windows only gets the system thumbnail, up to 2560 pixels. Not supported on Linux yet.' },
      videos: { label: 'Videos', note: 'WebM on macOS and videos on Linux need ffmpeg for their cover frames. Playing videos in the preview on Linux also needs GStreamer.' },
      live: { label: 'Live Photos', note: 'Live Photos exported from an Apple device, a HEIC or JPEG and a MOV with the same name in the same folder, are paired when imported together, and can be exported together.' },
    },
    privacy: 'Data and privacy',
    privacyRows: [
      ['hardDrives', 'Library', 'A `.momento` folder holding the originals, their thumbnails and a SQLite database. The database stores only relative paths, so after you quit Momento the folder can be moved, copied or backed up as a whole; while it’s open, use Export Library instead. On macOS a library in use can’t live in iCloud Drive.'],
      ['fileText', 'Settings', '`preferences.json` in `~/Library/Application Support/Momento/` on macOS, `%APPDATA%\\Momento\\` on Windows and `~/.config/Momento/` on Linux. Logs rotate at 5 MB and keep three older files.'],
      ['wifi', 'Network', 'No analytics. Momento goes online for two things only: checking GitHub Releases for updates at launch, which you can turn off in Settings, and downloading images you import through the browser extension or a link. The extension talks only to `127.0.0.1:47641` on your own computer.'],
      ['lock', 'Lock', 'The password lock covers the interface only; it doesn’t encrypt files. If you forget the password, quit Momento and delete `passwordHash` from `preferences.json`.'],
    ],
    start: 'Quick start',
    steps: [
      ['Install', 'From the [latest release](https://github.com/Seaony/Momento/releases/latest), download the DMG for macOS, the `setup` program for Windows, or DEB, RPM or tar.gz for Linux. On Windows and Linux, pick `amd64` or `x86_64` for most PCs, and `arm64` or `aarch64` for ARM ones. The macOS app runs on Apple silicon and Intel, and is notarized by Apple.'],
      ['Create a library', 'The first time you open Momento, create a library and pick where its `.momento` folder goes.'],
      ['Add images', 'Drag them into the window, paste with `⌘V`, or choose files with `⌘I` (`Ctrl` instead of `⌘` on Windows and Linux). Save images from web pages with a right-click using the [browser extension](https://github.com/Seaony/Momento-Chomre-Extension).'],
    ],
    windowsNote: 'The Windows build isn’t code-signed yet, so SmartScreen warns the first time you open it: choose More info, then Run anyway.',
    maker: 'Made by',
    others: 'Other projects',
    backToTop: 'Back to top',
    notFound: { title: 'Page not found · Momento', heading: 'Page not found', body: 'There’s nothing at this address.', home: 'Back to Momento' },
  },
  zh: {
    title: 'Momento · 图片素材，收在自己的硬盘里',
    description:
      'Momento 是 macOS、Windows 和 Linux 上的本地图库。参考图、截图、照片和短视频放进硬盘上的一个文件夹，按颜色、标签和文件夹整理，不用账号，也不往任何地方上传。',
    language: '语言',
    toDark: '切换到深色模式',
    toLight: '切换到浅色模式',
    tagline: '图片素材，收在自己的硬盘里',
    intro: ['参考图、截图、照片和短视频，放进同一个本地图库。', '按颜色、标签和文件夹整理，想找的时候搜得到；', '不用账号，也不往任何地方上传。'],
    free: '免费开源',
    download: '下载',
    githubTip: 'GitHub · Seaony/Momento',
    extension: '浏览器扩展',
    changelog: '更新日志',
    shotAlt: 'Momento 主窗口：左边是文件夹侧栏，中间是三列瀑布流图片，右边的检查器显示选中图片的色板和标签',
    forYou: 'Momento 适合你吗？',
    problem:
      '存下来的图很快就散了：下载文件夹里一批，桌面上一堆截图，浏览器书签里还有一堆链接。等到要用的时候，只记得「那张偏粉的建筑照片」，却想不起放在哪。',
    answer: 'Momento 把它们收进一个图库，图库就是硬盘上的一个 `.momento` 文件夹。',
    fit: '如果你经常收集参考图、截图或照片，又不想交给云端服务保管，它适合你。如果你只想在手机和电脑之间同步相册，系统自带的照片 App 更合适。',
    whatItDoes: '功能',
    features: [
      ['squaresFour', '浏览', '瀑布流适合一眼扫过很多图，等高行让每一行整齐排满，列表方便看文件名和大小。按空格打开预览，可以缩放、平移、播放动图和视频，按 H 水平翻转、按 G 看灰度。也可以全屏放映当前列表。'],
      ['palette', '查找', '每张图导入时自动提取 8 色色板。可以按颜色、标签和扩展名筛选，也可以搜名称、备注、来源链接和标签。智能文件夹（在「设置 › 侧栏」里打开）按条件自动收集图片，比如「宽度超过 2000 像素、色板里有蓝色的 PNG」。'],
      ['folders', '整理', '嵌套文件夹、标签、收藏和备注，都能多选后一次改完。标签可以复制后粘贴到别的图上。批量重命名可以按模板编号，也可以查找替换。'],
      ['copy', '查重导出', '「查找相似图片」把看起来一样的图分成一组，选一张保留，其余几张的标签、文件夹和备注并进来，然后移到回收站。导出时可以转成 JPEG 或 PNG、限制最长边，常用的设置存成预设。'],
      ['trayArrowDown', '导入', '拖入、粘贴、选文件或整个文件夹，按内容去重。可以监视几个文件夹，放进去的图自动导入，原文件移到废纸篓。图片里自带的关键字可以直接变成标签。'],
      ['appWindow', '原生', 'macOS、Windows 和 Linux 用同一套原生界面，支持中文、英文和日语。还有密码锁、菜单栏图标、开机启动、可以改的快捷键，以及浅色和深色外观。'],
    ],
    ext: {
      title: '浏览器扩展',
      intro: '看到想留的图片，不用先下载再拖进来，在网页上右键选「保存到 Momento」就行。扩展用在 Chrome 上，需要电脑上开着 Momento，并且打开了一个图库。',
      rows: [
        ['cursorClick', '单张', '在图片、视频或图片链接上右键。扩展会尽量找原图：srcset 里最大的一档、页面数据里的原图地址，以及知乎、豆瓣、Lofter、B 站、Unsplash、Pexels、ArtStation、Flickr 等网站的原图规则。'],
        ['stack', '整帖', '在小红书、Instagram、Pixiv、微博、X、Pinterest、Behance、Dribbble、站酷、花瓣、ArtStation 打开帖子页面后右键，选「保存这一帖全部」，图片和 mp4 视频一起存；实况照片会存成一张图和一段单独的视频。小红书笔记和 Instagram 帖子上还有一个 Momento 按钮，点一下就存整帖。'],
        ['listChecks', '整页', '在页面上右键选「批量保存本页图片…」，或者从浏览器的扩展菜单里点 Momento，列出扩展在这一页找到的图片，按尺寸和格式筛选，可以 Shift 连选，选好后一次存进 Momento。'],
        ['camera', '截图', '在页面空白处右键，选「截取可见区域保存到 Momento」，当前这一屏存成 PNG。'],
      ],
      limits: '存进去的图片会带上来源网页，之后在 Momento 里能点回原页面。B 站、抖音、直播回放这类分片播放的视频存不了；要登录才能看的图片，有时下载不到。',
      install: {
        title: '手动安装',
        sub: '大约一分钟',
        steps: ['下载 Manual-Install 压缩包，解压到一个会长期保留的位置', '打开 `chrome://extensions`，开启「开发者模式」', '点「加载已解压的扩展程序」，选 extension 文件夹'],
      },
      mock: { extensions: '扩展程序', devMode: '开发者模式', load: '加载已解压的扩展程序' },
      get: '获取扩展',
    },
    supported: '支持的格式',
    groups: {
      images: { label: '图片' },
      raw: { label: '相机 RAW 等', note: 'macOS 完整支持；Windows 只取系统缩略图，最长 2560 像素；Linux 暂不支持。' },
      videos: { label: '视频', note: 'macOS 上的 WebM 和 Linux 上的视频需要装 ffmpeg 才有封面；Linux 上在预览里播放视频还需要 GStreamer。' },
      live: { label: '实况照片', note: '苹果设备导出的实况照片（同一文件夹里同名的 HEIC 或 JPEG 加 MOV）一起导入时自动配对，导出时可以一起导出。' },
    },
    privacy: '数据和隐私',
    privacyRows: [
      ['hardDrives', '图库', '一个 `.momento` 文件夹，里面是原图、缩略图和一个 SQLite 数据库。数据库只记相对路径，退出 Momento 后整个文件夹可以随意移动、复制和备份；开着的时候用「导出图库」。macOS 上正在用的图库不能放进 iCloud Drive。'],
      ['fileText', '设置', '存在 `preferences.json`：macOS 在 `~/Library/Application Support/Momento/`，Windows 在 `%APPDATA%\\Momento\\`，Linux 在 `~/.config/Momento/`。日志满 5 MB 轮换，保留三份。'],
      ['wifi', '联网', '不做任何统计。只会联网做两件事：启动时到 GitHub Releases 检查更新（可以在设置里关掉），以及下载你通过浏览器扩展或链接要导入的图片。扩展只连本机的 `127.0.0.1:47641`。'],
      ['lock', '密码锁', '只锁界面，不加密文件。忘了密码就先退出 Momento，再删掉 `preferences.json` 里的 `passwordHash`。'],
    ],
    start: '快速开始',
    steps: [
      ['安装', '从[最新版本](https://github.com/Seaony/Momento/releases/latest)下载：macOS 用 DMG，Windows 用 `setup` 安装程序，Linux 用 DEB、RPM 或 tar.gz。Windows 和 Linux 一般选 `amd64` 或 `x86_64`，ARM 电脑选 `arm64` 或 `aarch64`。macOS 版同时支持 Apple 芯片和 Intel，已通过 Apple 公证。'],
      ['建一个图库', '第一次打开时新建图库，选一个放 `.momento` 文件夹的位置。'],
      ['把图放进来', '直接拖进窗口，或者 `⌘V` 粘贴、`⌘I` 选文件（Windows 和 Linux 用 `Ctrl`）。网页上的图片可以用[浏览器扩展](https://github.com/Seaony/Momento-Chomre-Extension)右键保存。'],
    ],
    windowsNote: 'Windows 版还没有代码签名，第一次打开时 SmartScreen 会提示，点「更多信息」再点「仍要运行」。',
    maker: '作者',
    others: '其他产品',
    backToTop: '回到顶部',
    notFound: { title: '页面不存在 · Momento', heading: '这一页没找到', body: '这个地址下什么也没有。', home: '回到 Momento' },
  },
};
