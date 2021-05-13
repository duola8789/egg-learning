('use strict');
/**
 * Created By zh on 2019-04-15
 */
const Service = require('egg').Service;

class WsService extends Service {
  // 总览
  async all() {
    const res = this.ctx.helper.produceWsData('EVENT_STAT', {
      time: new Date().getHours(),
      value: { VH_ILL: 1000, RD_SEC: 2000, RD_ASS: 3000 },
    });
    return JSON.stringify(res);
  }

  // 违法停车
  async VH_ILL_PARK() {
    const res = this.ctx.helper.produceWsData('EVENT_STAT_100', {
      time: new Date().getHours(),
      value: {
        VH_ILL_PARK_BUS_LANE: 1000,
        VH_ILL_PARK_BICYCLE_LANE: 2000,
        VH_ILL_PARK_SIDEWALK: 3000,
        VH_ILL_PARK_MOTORWAY: 4000,
      },
    });
    return JSON.stringify(res);
  }

  // 违法通行
  async VH_ILL_TRAFFIC() {
    const res = this.ctx.helper.produceWsData('EVENT_STAT_101', {
      time: new Date().getHours(),
      value: {
        VH_ILL_TRAFFIC_TRUCK: 1000,
        VH_ILL_TRAFFIC_MUD_TRUCK_OL: 2000,
        VH_ILL_TRAFFIC_OVER_SPEED: 31000,
        VH_ILL_TRAFFIC_BUS_LANE: 4000,
        VH_ILL_TRAFFIC_BICYCLE_LANE: 5000,
        VH_ILL_TRAFFIC_REVERSE_DRIVE: 6000,
        VH_ILL_TRAFFIC_FOREIGN_CONTROL1000: 7000,
      },
    });
    return JSON.stringify(res);
  }

  // 信号灯故障
  async RD_ASS_SIGNAL_FAULT() {
    const res = this.ctx.helper.produceWsData('EVENT_STAT_200', {
      time: new Date().getHours(),
      value: {
        RD_ASS_SIGNAL_FAULT_NORMAL: 1000,
        RD_ASS_SIGNAL_FAULT_BLINK: 2000,
        RD_ASS_SIGNAL_FAULT_BLACK: 3000,
      },
    });
    return JSON.stringify(res);
  }

  // 抛撒物
  async RD_SEC_ROAD_LITTER() {
    const res = this.ctx.helper.produceWsData('EVENT_STAT_300', {
      time: new Date().getHours(),
      value: {
        RD_SEC_ROAD_LITTER_MOTORWAY: 1000,
        RD_SEC_ROAD_LITTER_BICYCLE_LANE: 2000,
      },
    });
    return JSON.stringify(res);
  }
}

module.exports = WsService;
