<template lang="pug">
	.login
		van-button(type="primary" @click="login") 立即登录
</template>

<script>
export default {
  mounted() {
    this.login()
  },
  methods: {
    login() {
      const self = this
      window.JSSDK.Isv.requestLogin(function(res) {
        setTimeout(function() {
          if (res.data === '1') {
            self.$router.replace('/logined_jd/')
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
