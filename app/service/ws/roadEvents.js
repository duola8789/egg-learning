'use strict';

const Service = require('egg').Service;
const Mock = require('mockjs');
const Random = Mock.Random;

const makeObjectNo = eventType => {
  const OBJECT_NOS = {
    100: () => `京${Random.character('lower')}${Random.integer(10000, 99999)}`,
    101: () => `京${Random.character('lower')}${Random.integer(10000, 99999)}`,
    200: () => Random.integer(100000, 999999),
    300: () => Random.integer(10000000, 99999999),
  };
  return OBJECT_NOS[eventType];
};

class WsService extends Service {
  // 道路事件
  async all() {
    const events = Array.from({ length: Random.integer(1, 5) }).map((v, index) => {
      const { eventTypes, mapConfig } = this.config;
      const eventTopType = this.ctx.helper.getRandomInArray(eventTypes, 0);
      const eventType = this.ctx.helper.getRandomInArray(eventTopType.subTypes, 0);
      const eventSubType = this.ctx.helper.getRandomInArray(eventType.subTypes);
      const points = this.ctx.helper.getRandomInArray(mapConfig.points);
      return {
        eventId: Random.id(),
        eventTopType: eventTopType.type,
        eventType: eventType.type,
        eventSubType,
        eventTime: Date.now() - index * 10000000,
        lonBD09: points[0],
        latBD09: points[1],
        locRoad: Random.city() + Random.county() + Random.cword() + '路',
        collectVehId: Random.id(),
        evidentImg: this.ctx.helper.getRandomInArray(mapConfig.pics),
        objectNo: makeObjectNo(eventType.type)(),
      };
    });

    const addRes = () => this.ctx.helper.produceWsData('ROAD_EVENTS', events);
    // const clearRes = () => this.ctx.helper.produceWsData('ROAD_EVENTS', undefined, { refresh: [100, 200, 300] });

    return JSON.stringify(addRes());
  }
}

module.exports = WsService;
