'use strict';
/**
 * Created By zh on 2019-05-05
 */

module.exports = () => {
  return async function uppercase(ctx, next) {
    ctx.query.name = ctx.query.name && ctx.query.name.toUpperCase();
    await next();
  };
};
