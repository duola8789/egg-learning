/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555309477933_8329';

  // add your middleware config here
  config.middleware = [ 'robot' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
    news: {
      // 豆瓣电影 API
      serverUrl: 'https://api.douban.com/v2/movie/in_theaters',
    },

    robot: {
      ua: [
        /Baiduspider/i,
      ],
    },

    // 跨域
    security: {
      domainWhiteList: [ 'http://localhost:3000' ],
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
