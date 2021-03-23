'use strict';
module.exports = app => {
  const { router, controller, ws } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/getTitle', controller.home.getTitle);

  router.get('/api/posts', controller.posts.index);

  // 路由加载中间件
  router.get('/search', app.middlewares.uppercase(), controller.search.index);

  // Websocket
  // 巡检
  ws.route('/inspection/api/v1/socket', controller.ws.apollo.index);
};
