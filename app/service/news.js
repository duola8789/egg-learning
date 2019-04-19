'use strict';
/**
 * Created By zh on 2019-04-15
 */
const Service = require('egg').Service;

class NewsService extends Service {
  async list(count = 10) {
    // read config
    const { serverUrl } = this.config.news;

    // use build-in http client to GET hacker-news api
    const { data: { title, subjects: list } } = await this.ctx.curl(`${serverUrl}`, {
      data: {
        apikey: '0b2bdeda43b5688921839c8ecb20399b',
        city: '北京',
        count,
      },
      dataType: 'json',
    });
    return { title, list };
  }
}

module.exports = NewsService;
