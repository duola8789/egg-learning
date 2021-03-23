'use strict';
/**
 * Created By zh on 2019-05-05
 */

const Controller = require('egg').Controller;

class PostsController extends Controller {
  async index() {
    const { ctx } = this;
    const page = ctx.query.page;
    ctx.body = {
      test: page,
    };
  }
}

module.exports = PostsController;

