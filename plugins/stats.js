/* eslint-disable  */
export default ({ app: { router, store, context } }, inject) => {
  /*
    action_type 行为动作类型 
    1：参与 
    2：分享 
    3： 助力 
    4：浏览店铺 
    5：浏览商品 
    6：关注店铺 
    7：关注商品 
    8: 开卡会员 
    9：加购
  */

  inject('trackEvent', (category, action, label, value) => {
    try {
      /*
        _hmt.push(['_trackEvent', category, action, opt_label, opt_value])
        category：要监控的目标的类型名称。该项必选。
        action：用户跟目标交互的行为，如”播放”、”暂停”、”下载”等等。该项必选。
        opt_label：事件的一些额外信息，通常可以是歌曲的名称、链接的名称等等。该项可选。
        opt_value：事件的一些数值信息，比如权重、时长、价格等等。该项可选。
      */
      const isJDApp = JSSDK.Client.isJDApp()
      const platform = isJDApp ? '京东APP' : '小程序'
      // 百度事件
      window._hmt.push([
        '_trackEvent',
        category,
        action || 'click',
        platform,
        value
      ])
      // matomo事件
      window._paq.push([
        'trackEvent',
        category,
        action || 'click',
        platform,
        value
      ])
      // this.$matomo.trackEvent(category, action || 'click', optLabel, optValue)
      // 腾讯统计
      // const mtaEventId = config.mtaEvents.find((item) => item.name === category)
      //   .id
      // window.MtaH5.clickStat(mtaEventId)
    } catch (e) {}
  })
  inject('trackEventJd', (eventId, shopid, skuid) => {
    try {
      // 京东事件
      // 事件ID 对应表
      // join      参与按钮点击事件
      // share     分享按钮点击事件
      // assist    助力按钮点击事件
      // v_shop    浏览店铺点击事件
      // v_sku     浏览商品点击事件
      // v_channel 浏览频道点击事件
      const isJDApp = JSSDK.Client.isJDApp()
      const click = new window.MPing.inputs.Click(eventId)
      click.activityid = '538841'
      click.channel = isJDApp ? 'app' : 'gouwu_applet'
      click.shopid = shopid || ''
      click.skuid = skuid || ''
      click.userpin = ''
      click.shareuserid = ''
      click.openid = (store.state.user && store.state.user.openid) || ''
      click.updateEventSeries()
      const mping = new window.MPing()
      mping.send(click)
    } catch (e) {
      console.log(e)
    }
  })
  router.afterEach((to) => {
    try {
      // 百度统计
      window._hmt.push([
        '_trackPageview',
        `${router.options.base.slice(0, -1)}${to.fullPath}`
      ])
      // 京东统计
      const isJDApp = JSSDK.Client.isJDApp()
      const pv = new window.MPing.inputs.PV()
      pv.shopid = ''
      pv.userpin = ''
      pv.activityid = '538841'
      pv.channel = isJDApp ? 'app' : 'gouwu_applet'
      pv.shareuserid = ''
      pv.openid = (store.state.user && store.state.user.openid) || ''
      const mping = new window.MPing()
      mping.send(pv)
      // 腾讯统计
      window.MtaH5.pgv()
    } catch (e) {}
  })
}
