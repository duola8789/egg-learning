'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/getTitle', controller.home.getTitle);

  // Restful API 快捷方式
  router.resources('posts', '/api/posts', controller.posts);

  // 路由加载中间件
  router.get('/search', app.middlewares.uppercase(), controller.search.index);
};
