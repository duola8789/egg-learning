'use strict';
const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = {
  format() {
    console.log('This is a helper method');
  },
  produceWsData(type, data, ext = {}) {
    const dataType = this.config.wsTypes[type];
    return {
      ext: { dataType, ...ext },
      data,
    };
  },
  getValueInRange(base = 100, max = 1000, min = 1, interval = 1) {
    let isAdd = true;
    return function getResult() {
      base = isAdd ? base + interval : base - interval;
      if (base >= max) {
        isAdd = false;
      } else if (base <= min) {
        isAdd = true;
      }
      return base;
    };
  },
  getRegion(area = '') {
    const res = [...this.config.mapConfig.areas]
      .filter(v => !!v)
      .sort(() => Math.random() - 0.5)
      .slice(0, 7)
      .map(v => ({ locRoad: v, eventNum: Random.integer(10, 100) }));
    return [{ locRoad: area || '啦啦啦', eventNum: 1001 }, ...res].sort((a, b) => b.eventNum - a.eventNum);
  },
  getRandomInArray(arr, index) {
    if (index !== undefined && arr[index] !== undefined) {
      return arr[index];
    }
    return arr[Random.integer(0, arr.length - 1)];
  },
};
