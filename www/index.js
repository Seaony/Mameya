// www.mameya.app 的所有请求 301 跳到 mameya.app，路径和参数原样保留
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = 'mameya.app';
    return Response.redirect(url.toString(), 301);
  },
};
