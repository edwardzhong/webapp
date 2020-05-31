<template lang="pug">
.cover-screen
</template>

<script>
import { config } from '@/utils/config'
export default {
  mounted() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner',
      message: '微信授权中...'
    })
    const preUrl = `${location.origin}/${location.pathname.split('/')[1]}/`
    const url = encodeURIComponent(`${preUrl}logined_wechat/`)
    // xinrui-isv.jdfw1.com
    // xinrui1-isv.jdfw1.com
    // xinrui2-isv.jdfw1.com
    // xinrui3-isv.jdfw1.com
    // xinrui4-isv.jdfw1.com
    // xinrui5-isv.jdfw1.com
    // const url = encodeURIComponent(
    //   `https://xinrui1-isv.jdfw1.com/mall-test/logined_wechat/`
    // )
    const biz =
      location.host === 'xinrui-isv.isvjcloud.com'
        ? 'jm-business-center'
        : 'jm-business-center-2'
    console.log(url)
    console.log(biz)
    console.log(window.location.href)
    window.location.href = `https://wq.jd.com/pinbind/pintokenredirect?biz=${biz}&url=${url}`
  }
}
</script>
