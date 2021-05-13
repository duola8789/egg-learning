('use strict');
/**
 * Created By zh on 2019-04-15
 */
const Service = require('egg').Service;
const Mock = require('mockjs');
const Random = Mock.Random;

class WsService extends Service {
  // 总览
  async all() {
    const res = this.ctx.helper.produceWsData('OVERVIEW_DATA', {
      collectVehNum: Random.integer(0, 10),
      validMileage: Random.integer(0, 100000),
      totalMileage: Random.integer(0, 100000),
      VH_ILL: Random.integer(0, 100000),
      RD_ASS: Random.integer(0, 100000),
      CT_CAR: Random.integer(0, 100000),
    });
    return JSON.stringify(res);
  }

  // 违法停车
  async overview100() {
    const VH_ILL_PARK_BUS_LANE = Random.integer(0, 100);
    const VH_ILL_PARK_BICYCLE_LANE = Random.integer(0, 100);
    const VH_ILL_PARK_SIDEWALK = Random.integer(0, 100);
    const VH_ILL_PARK_MOTORWAY = Random.integer(0, 100);

    const res = this.ctx.helper.produceWsData('OVERVIEW_DATA_100', {
      VH_ILL_PARK_BUS_LANE,
      VH_ILL_PARK_BICYCLE_LANE,
      VH_ILL_PARK_SIDEWALK,
      VH_ILL_PARK_MOTORWAY,
      VH_ILL_PARK: VH_ILL_PARK_BUS_LANE + VH_ILL_PARK_BICYCLE_LANE + VH_ILL_PARK_SIDEWALK + VH_ILL_PARK_MOTORWAY,
    });
    return JSON.stringify(res);
  }

  // 违法通行
  async overview101() {
    const VH_ILL_TRAFFIC_OVER_SPEED = Random.integer(0, 100); // 超速行驶事件数
    const VH_ILL_TRAFFIC_BUS_LANE = Random.integer(0, 100); // 占用公交车道行驶事件数
    const VH_ILL_TRAFFIC_BICYCLE_LANE = Random.integer(0, 100); // 占用非机动车道行驶事件数

    const res = this.ctx.helper.produceWsData('OVERVIEW_DATA_101', {
      VH_ILL_TRAFFIC_OVER_SPEED,
      VH_ILL_TRAFFIC_BUS_LANE,
      VH_ILL_TRAFFIC_BICYCLE_LANE,
      VH_ILL_TRAFFIC: VH_ILL_TRAFFIC_OVER_SPEED + VH_ILL_TRAFFIC_BUS_LANE + VH_ILL_TRAFFIC_BICYCLE_LANE,
    });
    return JSON.stringify(res);
  }

  // 重点车辆监管
  async overview103() {
    const VH_ILL_KEYVEH_TRUCK_ILL_PASSAGE = Random.integer(0, 100); // 货车违法通行事件数
    const VH_ILL_KEYVEH_MUD_TRUCK_OVER_LOAD = Random.integer(0, 100); // 泥头车超载事件数
    const VH_ILL_KEYVEH_MUD_TRUCK_UNLICENSED = Random.integer(0, 100); // 泥头车无证运营事件数

    const res = this.ctx.helper.produceWsData('OVERVIEW_DATA_101', {
      VH_ILL_KEYVEH_TRUCK_ILL_PASSAGE,
      VH_ILL_KEYVEH_MUD_TRUCK_OVER_LOAD,
      VH_ILL_KEYVEH_MUD_TRUCK_UNLICENSED,
      VH_ILL_KEYVEH:
        VH_ILL_KEYVEH_TRUCK_ILL_PASSAGE + VH_ILL_KEYVEH_MUD_TRUCK_OVER_LOAD + VH_ILL_KEYVEH_MUD_TRUCK_UNLICENSED,
    });
    return JSON.stringify(res);
  }

  // 秩序设施故障
  async overview200() {
    const RD_ASS_ORDER_SIGNAL_NORMAL = Random.integer(0, 100); // 信号灯正常20001
    const RD_ASS_ORDER_SIGNAL_BLINK = Random.integer(0, 100); // 信号灯闪烁20002
    const RD_ASS_ORDER_SIGNAL_BLACK = Random.integer(0, 100); // 信号灯不亮20003
    const RD_ASS_ORDER_DAMAGED_GUARDRAIL = Random.integer(0, 100); // 护栏损坏20005

    const res = this.ctx.helper.produceWsData('OVERVIEW_DATA_200', {
      RD_ASS_ORDER_SIGNAL_NORMAL,
      RD_ASS_ORDER_SIGNAL_BLINK,
      RD_ASS_ORDER_SIGNAL_BLACK,
      RD_ASS_ORDER_DAMAGED_GUARDRAIL,
      RD_ASS_ORDER:
        RD_ASS_ORDER_SIGNAL_NORMAL +
        RD_ASS_ORDER_SIGNAL_BLINK +
        RD_ASS_ORDER_SIGNAL_BLACK +
        RD_ASS_ORDER_DAMAGED_GUARDRAIL,
    });
    return JSON.stringify(res);
  }

  // 道路环保
  async overview300() {
    const CT_CAR_ROAD_EP_RL_BIG = Random.integer(0, 100);

    const res = this.ctx.helper.produceWsData('OVERVIEW_DATA_300', {
      CT_CAR_ROAD_EP_RL_BIG,
      CT_CAR_ROAD_EP: CT_CAR_ROAD_EP_RL_BIG,
    });
    return JSON.stringify(res);
  }
}

module.exports = WsService;
