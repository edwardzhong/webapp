<template lang="pug">
.cover-screen
</template>

<script>
import { mapActions } from 'vuex'
import { config } from '../utils/config.js'
import { setToken } from '@/utils/auth.js'
export default {
  mounted() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner',
      message: '京东授权中...'
    })
    this.login()
  },
  methods: {
    ...mapActions(['fetchToken']),
    login() {
      const self = this
      window.JSSDK.Isv.isAppLogin((res) => {
        setTimeout(() => {
          // 京东已登陆
          if (res.data === '1') {
            // eslint-disable-line
            window.JSSDK.Isv.requestIsvToken(
              {
                url: config.host
              },
              function(res) {
                if (typeof res.data === 'string') {
                  const token = res.data
                  // 获取后端token
                  self
                    .fetchToken({ token, source: '01' })
                    .then((res) => {
                      setToken(res.access_token)
                      self.$router.replace(
                        window.localStorage.getItem(config.landPage) || '/'
                      )
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                } else {
                  self.login()
                }
              }
            )
          } else {
            this.$toast.clear()
            this.$router.replace('/login_jd/')
          }
        })
      })
    }
  }
}
</script>
