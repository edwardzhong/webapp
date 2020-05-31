import { share } from './config'
const { title, content, shareImage, shareImageMini } = share
let { url } = share
// 是否在京东App内
export function isJDApp() {
  return window.JSSDK.Client.isJDApp()
}

// 是否在微信小程序内
export function isMiniProgram() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('miniprogram')
}
// 是否在安卓内
export function isAndroid() {
  const u = navigator.userAgent
  return u.includes('Android') || u.includes('Linux')
}
// 是否在IOS手机
export function isIOS() {
  const u = navigator.userAgent
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

// 是否在微信内
export function isWeixin() {
  return window.JSSDK.Client.isWeixin()
}

// 是否在QQ内
export function isQQ() {
  return window.JSSDK.Client.isQQ()
}

// 跳转京东页面
export function jumpJdPage(url) {
  // 京东
  if (process.env.NODE_ENV === 'development') {
    console.log('jumpJdPage')
  } else if (isJDApp()) {
    window.JSSDK.Native.Jump.Mpage.toUrl({
      url
    })
  } else {
    window.wx.miniProgram.navigateTo({
      url: '/pages/h5/index?encode_url=' + encodeURIComponent(url)
    })
  }
}

// 设置分享
/**
 * title 分享标题
 * content 分享内容
 * shareImage 京东的分享图标
 * mpShareImage 小程序的分享图片
 * cb 分享后的回调函数
 */
export function setShare(userId, cb) {
  // 京东
  if (isJDApp()) {
    // 渠道统计
    url += '&ADTAG=jd.share&utm_source=jd_share&user_id=' + userId
    window.jdshare.setShareInfo({
      title,
      content,
      url,
      img: shareImage,
      channel: 'Wxfriends,QQfriends,QQzone,Sinaweibo',
      mpId: 'gh_45b306365c3d',
      mpIconUrl: shareImageMini,
      mpPath: 'pages/h5/index?encode_url=' + encodeURIComponent(url),
      mpType: '0',
      callback() {
        cb && cb()
      },
      clickcallback: null,
      qrparam: null,
      keyparam: null,
      timeline_title: ''
    })
  } else {
    // 渠道统计
    url += '&ADTAG=wx.share&utm_source=wx_share'
    const query = `atmosimgurl=${encodeURIComponent(
      shareImageMini
    )}&sharetitle=${title}&shareurl=${encodeURIComponent(
      url
    )}&shareimgurl=${encodeURIComponent(shareImage)}&isautoback=1`
    window.wx.miniProgram.navigateTo({
      url: `/pages/h5share/index/index?${query}`
    })
  }
}
