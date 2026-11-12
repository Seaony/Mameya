# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro（纯静态输出）+ 手写 CSS，部署到 Cloudflare Workers 静态资源。来自交接文档的决定。

## Users

想了解 Seaony 和这些产品的人：从 GitHub、社交平台或产品页点进来的开发者和用户，多数在桌面浏览器，也有人在手机上打开。中英日三种语言。

## Product Purpose

`mameya.app` 根域名的个人主页，是以后所有 `<产品>.mameya.app` 的总入口。只做三件事：介绍自己、列出在做的产品、给出联系方式。

## Capabilities and Constraints

- 三种语言：英文 `/`、中文 `/zh/`、日文 `/ja/`；根路径按浏览器语言自动跳转，手动选过就按选过的来。
- 亮色、暗色两档开关；没手动选过时跟随系统。
- 不做博客、Uses、文章（以后可能加博客，目录留了位置）。
- 不显示版本号、下载数、Star 数这类会过期的数字。
- 不引入统计、评论、动画库、图标库（少量图标直接内联 Lucide 的路径）。

## Brand Commitments

- 简约但精细：元素少，每处细节都要经得起细看。版式以桌面设计稿「Mameya 个人网站 Redesign」为准。
- 名字取「豆屋」的意思：Logo 是毛豆荚，主题色是低饱和的浅绿色。
- 英文字体 Geist，中日文用系统字体。

## Evidence on Hand

- 头像：用户指定的橙发动漫头像（`src/assets/avatar.jpg`）。
- 产品：Yomi、Momento、Moni、Kayoi、Mekke、Kakatta（开发中），一句话介绍取自各仓库 README。
- 联系方式：邮箱、GitHub、Telegram（链接），微信、小红书、抖音（二维码）。

## Product Principles

1. 少即是多：只放介绍、产品、联系三块。
2. 内容不过期：不放会变的数字。
3. 每种语言按各自的说法写，不逐字翻译。
