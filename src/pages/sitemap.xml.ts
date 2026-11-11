// 三种语言的首页，每条都列出另外两种语言的版本（hreflang）
import type { APIRoute } from 'astro';
import { langs, locales } from '../i18n/ui';

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const alternates = [
    ...langs.map((l) => `<xhtml:link rel="alternate" hreflang="${locales[l].hreflang}" href="${url(locales[l].path)}"/>`),
    `<xhtml:link rel="alternate" hreflang="x-default" href="${url('/')}"/>`,
  ].join('');
  const body = langs.map((l) => `<url><loc>${url(locales[l].path)}</loc>${alternates}</url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${body}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
