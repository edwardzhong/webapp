<template lang="pug">
.container
	.title-block(:class="{hide:start}")
		.start-logo
		.num {{count}}
	.sence(:class="{show:start}" ref="sence" @click="checkPacks($event)")
		.second {{second}}
	van-popup(v-model="popupSucc")
		.dialog
			h4.dialog-title 恭喜获得!
			.dialog-body
				.bean
				.succ-txt 京豆20个！运气也太好了吧！
				.txt 奖品在
					nuxt-link(to="my")
						span 个人中心
					|查看
				.btn(@click="popupSucc=false") 返回活动
		.dialog-close(@click="popupSucc=false")
</template>
<script>
import Stage from '../utils/game'

export default {
  name: 'Game',
  data() {
    return {
      start: false,
      count: 3,
      second: 10,
      packs: 0,
      timer: null,
      stage: null,
      popupSucc: false
    }
  },
  mounted() {
    setTimeout(this.countDown, 1000)
    this.stage = new Stage(this.$refs.sence)
  },
  methods: {
    checkPacks(e) {
      const target = e.target
      if (target.className !== 'red-pack') return
      this.packs++
      if (this.packs >= 10) {
        clearTimeout(this.timer)
        this.stage.stop()
        this.popupSucc = true
      }
    },
    countDown() {
      if (this.count < 2) {
        this.start = true
        setTimeout(() => {
          this.timer = this.gameTime()
        }, 1000)
        setTimeout(() => {
          this.stage.start()
        }, 500)
        return
      }
      this.count--
      setTimeout(this.countDown, 1000)
    },
    gameTime() {
      if (this.second < 1) {
        return
      }
      this.second--
      this.timer = setTimeout(this.gameTime, 1000)
    }
  }
}
</script>
<style>
.red-pack {
  position: absolute;
  left: 0;
  top: 0;
  width: 92px;
  height: 120px;
  background: url('../assets/images/pack1.png') no-repeat 50% / 100% 100%;
}
</style>
<style lang="scss" scoped>
@import '../components/style';
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 1000px;
  background: url('../assets/images/gamebg.jpg') no-repeat 50% / 100% 100%;
}
.sence {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &.show {
    display: block;
  }
}
.second {
  position: absolute;
  top: 35px;
  right: 30px;
  width: 124px;
  height: 124px;
  line-height: 1.8;
  text-align: center;
  background: rgba(236, 244, 255, 1);
  border: 8px solid rgba(85, 111, 181, 1);
  border-radius: 50%;
  font-size: 60px;
  font-weight: bold;
  color: rgba(85, 111, 181, 1);
  z-index: 9;
}
.title-block {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  flex-flow: column nowrap;
  &.hide {
    display: none;
  }
}
.start-logo {
  width: 680px;
  height: 240px;
  margin: 400px auto 0;
  background: url('../assets/images/gamelogo.png') no-repeat 50% / 100% 100%;
}
.num {
  width: 150px;
  height: 150px;
  line-height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
  font-size: 130px;
  font-weight: bold;
  color: rgba(255, 68, 84, 1);
  background: linear-gradient(to right, #5a4dc7, #3f3396);
  -webkit-text-stroke: 4px #34278c;
  text-stroke: 4px #34278c;
}
</style>
