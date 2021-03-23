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
      RD_SEC: Random.integer(0, 100000),
    });
    return JSON.stringify(res);
  }

  // 违法停车
  async VH_ILL_PARK() {
    const VH_ILL_PARK_BUS_LANE = Random.integer(0, 100);
    const VH_ILL_PARK_BICYCLE_LANE = Random.integer(0, 100);
    const VH_ILL_PARK_SIDEWALK = Random.integer(0, 100);
    const VH_ILL_PARK_MOTORWAY = Random.integer(0, 100);

    const res = this.ctx.helper.produceWsData('OVERVIEW_DATA_VH_ILL_PARK', {
      VH_ILL_PARK_BUS_LANE,
      VH_ILL_PARK_BICYCLE_LANE,
      VH_ILL_PARK_SIDEWALK,
      VH_ILL_PARK_MOTORWAY,
      VH_ILL_PARK: VH_ILL_PARK_BUS_LANE + VH_ILL_PARK_BICYCLE_LANE + VH_ILL_PARK_SIDEWALK + VH_ILL_PARK_MOTORWAY,
    });
    return JSON.stringify(res);
  }

  // 违法通行
  async VH_ILL_TRAFFIC() {
    const VH_ILL_TRAFFIC_TRUCK = Random.integer(0, 100); // 货车违章事件数
    const VH_ILL_TRAFFIC_MUD_TRUCK_OL = Random.integer(0, 100); // 泥头车超载事件数
    const VH_ILL_TRAFFIC_OVER_SPEED = Random.integer(0, 100); // 超速行驶事件数
    const VH_ILL_TRAFFIC_BUS_LANE = Random.integer(0, 100); // 占用公交车道行驶事件数
    const VH_ILL_TRAFFIC_BICYCLE_LANE = Random.integer(0, 100); // 占用非机动车道行驶事件数
    const VH_ILL_TRAFFIC_REVERSE_DRIVE = Random.integer(0, 100); // 机动车逆向行驶事件数
    const VH_ILL_TRAFFIC_FOREIGN_CONTROL = Random.integer(0, 100); // 外地车管控事件数

    const res = this.ctx.helper.produceWsData('OVERVIEW_DATA_VH_ILL_TRAFFIC', {
      VH_ILL_TRAFFIC_MUD_TRUCK_OL,
      VH_ILL_TRAFFIC_OVER_SPEED,
      VH_ILL_TRAFFIC_BUS_LANE,
      VH_ILL_TRAFFIC_BICYCLE_LANE,
      VH_ILL_TRAFFIC_REVERSE_DRIVE,
      VH_ILL_TRAFFIC_FOREIGN_CONTROL,
      VH_ILL_TRAFFIC_TRUCK:
        VH_ILL_TRAFFIC_TRUCK +
        VH_ILL_TRAFFIC_TRUCK +
        VH_ILL_TRAFFIC_MUD_TRUCK_OL +
        VH_ILL_TRAFFIC_OVER_SPEED +
        VH_ILL_TRAFFIC_BUS_LANE +
        VH_ILL_TRAFFIC_BICYCLE_LANE +
        VH_ILL_TRAFFIC_REVERSE_DRIVE +
        VH_ILL_TRAFFIC_FOREIGN_CONTROL,
    });
    return JSON.stringify(res);
  }

  // 信号灯故障
  async RD_ASS_SIGNAL_FAULT() {
    const RD_ASS_SIGNAL_FAULT_NORMAL = Random.integer(0, 100);
    const RD_ASS_SIGNAL_FAULT_BLINK = Random.integer(0, 100);
    const RD_ASS_SIGNAL_FAULT_BLACK = Random.integer(0, 100);

    const res = this.ctx.helper.produceWsData('OVERVIEW_DATA_RD_ASS_SIGNAL_FAULT', {
      RD_ASS_SIGNAL_FAULT_NORMAL,
      RD_ASS_SIGNAL_FAULT_BLINK,
      RD_ASS_SIGNAL_FAULT_BLACK,
      RD_ASS_SIGNAL_FAULT: RD_ASS_SIGNAL_FAULT_NORMAL + RD_ASS_SIGNAL_FAULT_BLINK + RD_ASS_SIGNAL_FAULT_BLACK,
    });
    return JSON.stringify(res);
  }

  // 抛撒物
  async RD_SEC_ROAD_LITTER() {
    const RD_SEC_ROAD_LITTER_MOTORWAY = Random.integer(0, 100);
    const RD_SEC_ROAD_LITTER_BICYCLE_LANE = Random.integer(0, 100);

    const res = this.ctx.helper.produceWsData('OVERVIEW_DATA_RD_SEC_ROAD_LITTER', {
      RD_SEC_ROAD_LITTER_MOTORWAY,
      RD_SEC_ROAD_LITTER_BICYCLE_LANE,
      abandonedObjectNum: RD_SEC_ROAD_LITTER_MOTORWAY + RD_SEC_ROAD_LITTER_BICYCLE_LANE,
    });
    return JSON.stringify(res);
  }
}

module.exports = WsService;
