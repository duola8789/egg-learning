('use strict');
const Service = require('egg').Service;
const Mock = require('mockjs');
const Random = Mock.Random;

class DataMonitorService extends Service {
  // 数据监控 - 调用服务次数 + 存储数
  async briefData() {
    const res = this.ctx.helper.produceWsData('DATA_MONITOR_BRIEF', {
      aiServicedCount: Random.integer(1000, 10000),
      storage: Random.integer(1000, 10000),
    });
    return JSON.stringify(res);
  }

  // 数据监控 - 数据存储条数
  async recordTrendData() {
    const res = this.ctx.helper.produceWsData('DATA_MONITOR_RECORD_TREND', [
      { time: Date.now(), data: Random.integer(800, 1000) },
    ]);
    return JSON.stringify(res);
  }

  // 数据监控 - 算法执行数量briefData
  async algTrendData() {
    const res = this.ctx.helper.produceWsData('DATA_MONITOR_ALG_TREND', [
      { time: Date.now(), data: Random.integer(1000, 1200) },
    ]);
    return JSON.stringify(res);
  }

  // 数据监控 - 车端云端交互数据条数
  async interactionTrendData() {
    const res = this.ctx.helper.produceWsData('DATA_MONITOR_INTERACTION_TREND', [
      { time: Date.now(), data: Random.integer(1, 1000) },
    ]);
    return JSON.stringify(res);
  }

  // 数据监控 - 识别车辆指标特征值
  async featureTrendData() {
    const res = this.ctx.helper.produceWsData('DATA_MONITOR_FEATURE_TREND', [
      { time: Date.now(), data: Random.integer(1, 1000) },
    ]);
    return JSON.stringify(res);
  }
}

module.exports = DataMonitorService;
