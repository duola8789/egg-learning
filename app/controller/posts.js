'use strict';
/**
 * Created By zh on 2019-05-05
 */

exports.index = async (ctx) => {
  ctx.body = { data: `Hello posts ${ctx.params.name}` };
  ctx.status = 200;
};

exports.new = async (ctx) => {
  ctx.status = 200;
  ctx.body = {
    data: 'news',
  };
};

exports.create = async (ctx) => {
  console.log(ctx.request.body, 123);
  ctx.status = 500;
  ctx.body = {
    data: 'posts',
  };
};

