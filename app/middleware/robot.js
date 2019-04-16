'use strict';
/**
 * Created By zh on 2019-04-15
 */
// app/middleware/robot.js
// options === app.config.robot

// 禁止百度爬虫访问。
// 通过 Middleware 判断 User-Agent：
module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    } else {
      await next();
    }
  };
};

// 用 curl http://localhost:7001/news -A "Baiduspider" 验证效果
