'use strict';
/**
 * Created By zh on 2019-05-05
 */
const Controller = require('egg').Controller;

class SearchController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `search: ${ctx.query.name}`;
  }
}

module.exports = SearchController;
