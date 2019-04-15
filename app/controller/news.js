'use strict';
/**
 * Created By zh on 2019-04-15
 */
// app/controller/news.js
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const { ctx } = this;
    const page = ctx.query.page || 1;
    const { title, list } = await ctx.service.news.list(page);
    await ctx.render('news/list.tpl', { title, list });
  }
}

module.exports = NewsController;
