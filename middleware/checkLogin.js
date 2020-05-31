import { getToken } from '../utils/auth'
import { isJDApp } from '../utils/client'
import { config } from '../utils/config'

export default function({ route, redirect }) {
  // 已登陆
  if (getToken()) {
    return
  }

  const whiteList = [
    'download_app',
    'auth_wechat',
    'logined_wechat',
    'login_jd',
    'logined_jd'
  ]
  if (whiteList.includes(route.name)) {
    return
  }

  window.localStorage.setItem(config.landPage, route.fullPath)

  // 京东
  if (isJDApp()) {
    return redirect('/logined_jd/')
    // 小程序
  } else {
    return redirect('/auth_wechat/')
  }
}
