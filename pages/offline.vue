<template lang="pug">
  .container
    van-popup(v-model="showEnd")
      .end
        <p>很遗憾！</p>
        //- img.flag(src="../assets/images/flag.png" alt="")
        span 活动已结束！
</template>

<script>
export default {
  data() {
    return {
      showEnd: true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
