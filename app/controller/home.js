'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
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
