'use strict';

const Controller = require('egg').Controller;

let timer_2_min;
let timer_60_min;

class ApolloWsController extends Controller {
  async index() {
    const { ctx } = this;
    if (!ctx.websocket) {
      throw new Error('this function can only be use in websocket router');
    }

    clearInterval(timer_2_min);
    clearInterval(timer_60_min);

    timer_2_min = setInterval(async () => {
      /* ***************************** 数据监控 ***************************** */
      // 数据监控 - 调用服务次数 + 存储数
      const briefData = await ctx.service.ws.dataMonitor.briefData();
      // 数据监控 - 数据存储条数
      const recordTrendData = await ctx.service.ws.dataMonitor.recordTrendData();
      // 数据监控 - 算法执行数量
      const algTrendData = await ctx.service.ws.dataMonitor.algTrendData();
      // 数据监控 - 车端云端交互数据条数
      const interactionTrendData = await ctx.service.ws.dataMonitor.interactionTrendData();
      // 数据监控 - 识别车辆指标特征值
      const featureTrendData = await ctx.service.ws.dataMonitor.featureTrendData();

      /* *************** 车辆状态 ************** */
      const vehStates = await ctx.service.ws.vehicle.vehStates();

      /* *************** 道路事件 ************** */
      const roadEvents = await ctx.service.ws.roadEvents.all();

      /* **************************** 数据概览 **************************** */
      // 大屏数据概览 - 状态总览
      const overviewData = await ctx.service.ws.dataOverview.all();
      // 大屏数据概览 - 违法停车
      const overviewData_100 = await ctx.service.ws.dataOverview.overview100();
      // 大屏数据概览 - 违法通行
      const overviewData_101 = await ctx.service.ws.dataOverview.overview101();
      // 大屏数据概览 - 重点车辆监管
      const overviewData_103 = await ctx.service.ws.dataOverview.overview103();
      // 大屏数据概览 - 秩序设施故障
      const overviewData_200 = await ctx.service.ws.dataOverview.overview200();
      // 大屏数据概览 - 抛撒物
      const overviewData_300 = await ctx.service.ws.dataOverview.overview300();

      /* **************************** 事件热门区域 **************************** */
      // 事件热门区域 - 状态总览
      const eventRegion = await ctx.service.ws.eventRegion.all();
      // 事件热门区域 - 违法停车
      const eventRegions_100 = await ctx.service.ws.eventRegion.eventRegions100();
      // 事件热门区域 - 违法通行
      const eventRegions_101 = await ctx.service.ws.eventRegion.eventRegions101();
      // 事件热门区域 - 重点车辆监管
      const eventRegions_103 = await ctx.service.ws.eventRegion.eventRegions103();
      // 事件热门区域 - 秩序设施故障
      const eventRegions_200 = await ctx.service.ws.eventRegion.eventRegions200();
      // 事件热门区域 - 道路环保
      const eventRegions_300 = await ctx.service.ws.eventRegion.eventRegions300();

      // /****************************** 大屏监控 ******************************/
      // // 概览数据 - 违停
      // const overviewDataIp = await ctx.service.ws.apollo.overviewDataIp();
      // // 事件热门区域 - 违停
      // const eventRegionIp = await ctx.service.ws.apollo.eventRegionIp();
      //
      // // 概览数据 - 信号灯
      // const overviewDataTl = await ctx.service.ws.apollo.overviewDataTl();
      // // 事件热门区域 - 信号灯
      // const eventRegionTl = await ctx.service.ws.apollo.eventRegionTl();
      //
      // // 概览数据 - 抛撒物
      // const overviewDataAo = await ctx.service.ws.apollo.overviewDataAo();
      // // 事件热门区域 - 抛撒物
      // const eventRegionAo = await ctx.service.ws.apollo.eventRegionAo();
      //
      // // 巡检状态总览
      // const overviewData = await ctx.service.ws.apollo.overviewData();
      // // 道路事件
      // const roadEvents = await ctx.service.ws.apollo.roadEvents();

      [
        briefData,
        recordTrendData,
        algTrendData,
        interactionTrendData,
        featureTrendData,
        vehStates,
        overviewData,
        overviewData_100,
        overviewData_101,
        overviewData_103,
        overviewData_200,
        overviewData_300,
        eventRegion,
        eventRegions_100,
        eventRegions_101,
        eventRegions_103,
        eventRegions_200,
        eventRegions_300,
        roadEvents,
      ].forEach(v => {
        ctx.websocket.send(v);
      });
    }, 2000);

    timer_60_min = setInterval(async () => {
      /* **************************** 事件统计 **************************** */
      // 事件统计 - 总览
      const eventState = await ctx.service.ws.eventStat.all();
      // 事件统计 - 违法停车
      const eventState_VH_ILL_PARK = await ctx.service.ws.eventStat.VH_ILL_PARK();
      // 事件统计 - 违法通行
      const eventState_VH_ILL_TRAFFIC = await ctx.service.ws.eventStat.VH_ILL_TRAFFIC();
      // 事件统计 - 信号灯故障
      const eventStatea_RD_ASS_SIGNAL_FAULT = await ctx.service.ws.eventStat.RD_ASS_SIGNAL_FAULT();
      // 事件统计 - 抛撒物
      const eventState_RD_SEC_ROAD_LITTER = await ctx.service.ws.eventStat.RD_SEC_ROAD_LITTER();

      [
        eventState,
        eventState_VH_ILL_PARK,
        eventState_VH_ILL_TRAFFIC,
        eventStatea_RD_ASS_SIGNAL_FAULT,
        eventState_RD_SEC_ROAD_LITTER,
      ].forEach(v => {
        ctx.websocket.send(v);
      });
    }, 60 * 1000);
  }
}

module.exports = ApolloWsController;
