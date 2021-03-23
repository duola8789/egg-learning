'use strict';
const Service = require('egg').Service;

class WsService extends Service {
  // 总览
  async all() {
    const res = this.ctx.helper.produceWsData('EVENT_REGION', {
      VH_ILL: this.ctx.helper.getRegion('机动车违法事件'),
      RD_ASS: this.ctx.helper.getRegion('道路资产故障事件'),
      RD_SEC: this.ctx.helper.getRegion('道路安全事件'),
    });
    return JSON.stringify(res);
  }

  // 违法停车
  async VH_ILL_PARK() {
    const res = this.ctx.helper.produceWsData('EVENT_REGION_VH_ILL_PARK', {
      VH_ILL_PARK_BUS_LANE: this.ctx.helper.getRegion('违法占用公交车道停车'),
      VH_ILL_PARK_BICYCLE_LANE: this.ctx.helper.getRegion('违法占用非机动车道停车'),
      VH_ILL_PARK_SIDEWALK: this.ctx.helper.getRegion('违法占用人行道停车'),
      VH_ILL_PARK_MOTORWAY: this.ctx.helper.getRegion('违法占用机动车道停车'),
    });
    return JSON.stringify(res);
  }

  // 违法通行
  async VH_ILL_TRAFFIC() {
    const res = this.ctx.helper.produceWsData('EVENT_REGION_VH_ILL_TRAFFIC', {
      VH_ILL_TRAFFIC_TRUCK: this.ctx.helper.getRegion('货车违章'),
      VH_ILL_TRAFFIC_MUD_TRUCK_OL: this.ctx.helper.getRegion('泥头车超载'),
      VH_ILL_TRAFFIC_OVER_SPEED: this.ctx.helper.getRegion('超速行驶'),
      VH_ILL_TRAFFIC_BUS_LANE: this.ctx.helper.getRegion('占用公交车道行驶'),
      VH_ILL_TRAFFIC_BICYCLE_LANE: this.ctx.helper.getRegion('占用非机动车道行驶'),
      VH_ILL_TRAFFIC_REVERSE_DRIVE: this.ctx.helper.getRegion('机动车逆向行驶'),
      VH_ILL_TRAFFIC_FOREIGN_CONTROL: this.ctx.helper.getRegion('外地车管控'),
    });
    return JSON.stringify(res);
  }

  // 信号灯故障
  async RD_ASS_SIGNAL_FAULT() {
    const res = this.ctx.helper.produceWsData('EVENT_REGION_RD_ASS_SIGNAL_FAULT', {
      RD_ASS_SIGNAL_FAULT_NORMAL: this.ctx.helper.getRegion('信号灯正常'),
      RD_ASS_SIGNAL_FAULT_BLINK: this.ctx.helper.getRegion('信号灯闪烁故障'),
      RD_ASS_SIGNAL_FAULT_BLACK: this.ctx.helper.getRegion('信号灯不亮故障'),
    });
    return JSON.stringify(res);
  }

  // 抛撒物子类
  async RD_SEC_ROAD_LITTER() {
    const res = this.ctx.helper.produceWsData('EVENT_REGION_RD_SEC_ROAD_LITTER', {
      RD_SEC_ROAD_LITTER_MOTORWAY: this.ctx.helper.getRegion('机动车道抛洒物'),
      RD_SEC_ROAD_LITTER_BICYCLE_LANE: this.ctx.helper.getRegion('非机动车道抛洒物'),
    });
    return JSON.stringify(res);
  }
}

module.exports = WsService;
