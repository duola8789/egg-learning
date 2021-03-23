'use strict';

module.exports = app => {
  app.once('server', () => {
    console.log('server started');
  });
};
