import { Toast } from 'vant'
import { host, path } from '../utils/config'
import { isJDApp, isMiniProgram } from '../utils/client'
import { getToken, removeToken } from '~/utils/auth'
const noLoadingPaths = ['/user', '/jd_interact', '/stats']
const reg = /\/task\/\d{1,}\/invite/
export default function({ $axios, env, redirect, route, store, app }) {
  $axios.defaults.timeout = 60 * 1000
  // Toast.allowMultiple()
  $axios.onRequest((config) => {
    if (process.env.NODE_ENV === 'development') {
      config.baseURL = '/api'
    } else {
      config.baseURL = '/mall-test-api/api'
    }
    config.headers.common.Authorization = 'Bearer ' + getToken()
    config.headers.common.Accept = 'application/x.jd-mall-618.v1+json'
    // 当前的环境 京东APP 1   微信小程序 2
    if (isJDApp()) {
      config.headers.common.Source = 1
    } else if (isMiniProgram()) {
      config.headers.common.Source = 2
    } else {
      config.headers.common.Source = 0
    }
    if (noLoadingPaths.includes(config.url)) return
    console.log(reg.test(config.url))
    if (reg.test(config.url)) return
    Toast.loading({
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner',
      className: 'topToast',
      message: '加载中...'
    })
  })

  $axios.onResponse((response) => {
    if (noLoadingPaths.includes(response.config.url)) return
    if (reg.test(response.config.url)) return
    Toast.clear('clearAll')
  })

  $axios.onError((error) => {
    Toast.clear('clearAll')
    if (error.message.search('timeout') > -1) {
      Toast('当前访问人数较多，任务完成进度可能延迟，您可以稍后再来查看~')
      return
    }
    const status = error.response.status
    // 未登录
    if (status === 401) {
      const arr = route.fullPath.split('/')
      const params = arr[arr.length - 1]
      if (isMiniProgram()) {
        removeToken()
        window.location.href = host + path + 'auth_wechat/' + params
      } else if (isJDApp()) {
        removeToken()
        window.location.href = host + path + 'login_jd/' + params
      } else {
        window.location.href = host + path + 'download_app/' + params
      }
    } else if (status === 422) {
      const data = error.response.data
      const arr = [10201, 10202, 10203, 10204, 10205]
      if (!arr.includes(data.status_code)) Toast(data.message)
    } else {
      store.commit('setPopupStuck', true)
    }
  })
}
