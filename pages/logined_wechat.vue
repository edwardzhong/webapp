<template lang="pug">
.cover-screen
</template>

<script>
import { mapActions } from 'vuex'
import { setToken } from '@/utils/auth.js'
import { config } from '@/utils/config.js'
export default {
  mounted() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner',
      message: '登录中...'
    })

    const token = this.$route.query.token
    // 获取后端token
    this.fetchToken({ token, source: '02' })
      .then((res) => {
        setToken(res.access_token)
        this.$router.replace(
          window.localStorage.getItem(config.landPage) || '/'
        )
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    ...mapActions(['fetchToken'])
  }
}
</script>

<style scoped></style>
