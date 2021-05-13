/* eslint valid-jsdoc: "off" */
'use strict';

const mapConfig = require('./map-config');

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555309477933_8329';

  // add your middleware config here
  config.middleware = ['robot'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
    news: {
      // 豆瓣电影 API
      serverUrl: 'https://api.douban.com/v2/movie/in_theaters',
    },

    robot: {
      ua: [/Baiduspider/i],
    },

    wsTypes: {
      VEH_STATE: 11, // GIS 车辆状态

      ROAD_EVENTS: 12, // GIS 事件数据

      OVERVIEW_DATA: 13, //  GIS 巡检状态总览
      OVERVIEW_DATA_100: 1000001, // GIS 巡检状态总览 - 违法停车
      OVERVIEW_DATA_101: 1010001, // GIS 巡检状态总览 - 违法通行
      OVERVIEW_DATA_103: 1030001, // GIS 巡检状态总览 - 重点车辆监管
      OVERVIEW_DATA_200: 2000001, // GIS 巡检状态总览 - 秩序设施故障
      OVERVIEW_DATA_300: 3000001, // GIS 巡检状态总览 - 抛洒物

      EVENT_STAT: 14, // GIS 道路事件统计
      EVENT_STAT_100: 1000002, // GIS 道路事件统计 - 违法停车
      EVENT_STAT_101: 1010002, // GIS 道路事件统计 - 违法通行
      EVENT_STAT_103: 1030003, // GIS 道路事件统计 - 重点车辆监管
      EVENT_STAT_200: 2000002, // GIS 道路事件统计 - 秩序设施故障
      EVENT_STAT_300: 3000002, // GIS 道路事件统计 - 抛洒物

      EVENT_REGION: 15, // GIS 事件热门区域
      EVENT_REGION_100: 1000003, // GIS 事件热门区域 - 违法停车
      EVENT_REGION_101: 1010003, // GIS 事件热门区域 - 违法通行
      EVENT_REGION_103: 1030003, // GIS 事件热门区域 - 重点车辆监管
      EVENT_REGION_200: 2000003, // GIS 事件热门区域 - 秩序设施故障
      EVENT_REGION_300: 3000003, // GIS 事件热门区域 - 抛洒物

      DATA_MONITOR_BRIEF: 21, // 数据监控 - 调用服务次数
      DATA_MONITOR_RECORD_TREND: 22, // 数据监控 - 数据存储条数
      DATA_MONITOR_ALG_TREND: 23, // 数据监控 - 算法执行数量
      DATA_MONITOR_INTERACTION_TREND: 24, // 数据监控 - 车端云端交互数据条数
      DATA_MONITOR_FEATURE_TREND: 25, // 数据监控 - 识别车辆指标特征值
    },

    mapConfig,

    eventTypes: [
      {
        type: 10,
        subTypes: [
          { type: 100, subTypes: [10001, 10002, 10003, 10004] },
          { type: 101, subTypes: [10103, 10104, 10105] },
          { type: 103, subTypes: [10301, 10302, 10303] },
        ],
      },
      {
        type: 20,
        subTypes: [{ type: 200, subTypes: [20001, 20002, 20003, 20005] }],
      },
      {
        type: 30,
        subTypes: [{ type: 300, subTypes: [30001] }],
      },
    ],

    // 跨域
    security: {
      domainWhiteList: ['http://localhost:3000'],
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
