'use strict';
const Service = require('egg').Service;

class WsService extends Service {
  // 总览
  async all() {
    const res = this.ctx.helper.produceWsData('EVENT_REGION', {
      VH_ILL: this.ctx.helper.getRegion('机动车违法事件'),
      RD_ASS: this.ctx.helper.getRegion('道路资产故障'),
      CT_CAR: this.ctx.helper.getRegion('市容市貌识别'),
    });
    return JSON.stringify(res);
  }

  // 违法停车
  async eventRegions100() {
    const res = this.ctx.helper.produceWsData('EVENT_REGION_100', {
      VH_ILL_PARK_BUS_LANE: this.ctx.helper.getRegion('违法占用公交车道停车'),
      VH_ILL_PARK_BICYCLE_LANE: this.ctx.helper.getRegion('违法占用非机动车道停车'),
      VH_ILL_PARK_SIDEWALK: this.ctx.helper.getRegion('违法占用人行道停车'),
      VH_ILL_PARK_MOTORWAY: this.ctx.helper.getRegion('违法占用机动车道停车'),
    });
    return JSON.stringify(res);
  }

  // 违法通行
  async eventRegions101() {
    const res = this.ctx.helper.produceWsData('EVENT_REGION_101', {
      VH_ILL_TRAFFIC_OVER_SPEED: this.ctx.helper.getRegion('超速行驶'),
      VH_ILL_TRAFFIC_BUS_LANE: this.ctx.helper.getRegion('占用公交车道行驶'),
      VH_ILL_TRAFFIC_BICYCLE_LANE: this.ctx.helper.getRegion('占用非机动车道行驶'),
    });
    return JSON.stringify(res);
  }

  // 重点车辆监管
  async eventRegions103() {
    const res = this.ctx.helper.produceWsData('EVENT_REGION_103', {
      VH_ILL_KEYVEH_TRUCK_ILL_PASSAGE: this.ctx.helper.getRegion('货车违法通行'),
      VH_ILL_KEYVEH_MUD_TRUCK_OVER_LOAD: this.ctx.helper.getRegion('泥头车超载'),
      VH_ILL_KEYVEH_MUD_TRUCK_UNLICENSED: this.ctx.helper.getRegion('泥头车无证运营'),
    });
    return JSON.stringify(res);
  }

  //  秩序设施故障
  async eventRegions200() {
    const res = this.ctx.helper.produceWsData('EVENT_REGION_200', {
      RD_ASS_ORDER_SIGNAL_NORMAL: this.ctx.helper.getRegion('信号灯正常'),
      RD_ASS_ORDER_SIGNAL_BLINK: this.ctx.helper.getRegion('信号灯闪烁故障'),
      RD_ASS_ORDER_SIGNAL_BLACK: this.ctx.helper.getRegion('信号灯不亮故障'),
      RD_ASS_ORDER_DAMAGED_GUARDRAIL: this.ctx.helper.getRegion('护栏损坏'),
    });
    return JSON.stringify(res);
  }

  // 道路环保
  async eventRegions300() {
    const res = this.ctx.helper.produceWsData('EVENT_REGION_300', {
      CT_CAR_ROAD_EP_RL_BIG: this.ctx.helper.getRegion('道路大件抛洒物'),
    });
    return JSON.stringify(res);
  }
}

module.exports = WsService;
