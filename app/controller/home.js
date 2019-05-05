'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 通过ctx.helper获取helper中定义的方法
    ctx.helper.format();
    this.app.logger.info('debuger info1123');
    await ctx.render('index.tpl');
  }

  async getTitle() {
    const { ctx } = this;
    ctx.body = {
      title: 'OK',
    };
    ctx.status = 200;
  }
}

module.exports = HomeController;
