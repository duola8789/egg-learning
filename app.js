'use strict';
/**
 * Created By zh on 2019-05-05
 */
class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  configWillLoad() {
    // 此时 config 文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // 注意：此函数只支持同步调用

    // 例如：参数中的密码是加密的，在此处进行解密
    // 例如：插入一个中间件到框架的 coreMiddleware 之间
  }

  async willReady() {
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用

    // 例如：从数据库加载数据到内存缓存
    this.app.cacheData = 555;
  }

}

// 将 Boot 类导出
module.exports = AppBootHook;
