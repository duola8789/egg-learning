'use strict';
const Service = require('egg').Service;
const Mock = require('mockjs');
const Random = Mock.Random;

const getCurrentPos = [];

class WsService extends Service {
  // 车辆状态
  async vehStates() {
    const vehIds = ['11111', '22222'];
    const routes = this.config.mapConfig.routes;

    const vehState = vehIds.map((v, index) => {
      getCurrentPos[index] = getCurrentPos[index]
        ? getCurrentPos[index]
        : this.ctx.helper.getValueInRange(0, routes[index].length - 1, 0);
      const currentPos = routes[index][getCurrentPos[index]()];

      return {
        vehId: v,
        driveMode: Random.integer(1, 3),
        velocity: Random.integer(0, 180),
        validMileage: Random.integer(100, 5000),
        totalMileage: Random.integer(100, 5000),
        coDriver: '老周',
        headAngle: index === 0 ? 40 : 90,
        lonBD09: currentPos[0],
        latBD09: currentPos[1],
      };
    });

    const res = this.ctx.helper.produceWsData('VEH_STATE', vehState);
    return JSON.stringify(res);
  }
}

module.exports = WsService;
