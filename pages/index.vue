<template lang="pug">
	.container
		.status
			.avatar
			nuxt-link(to="my")
				p 个人中心
			p 剩余抽卡机会：
				span {{ drawNums }}
			p(@click="showRule") 活动攻略                    
			.audio
		nuxt-link(to="game")
			.pack
		h2.title 同仁堂、正官庄、雀巢、Cenovis保健品等
			br
			| 多种奖品等您来拿
		h3.desc 卡面集齐618元即可获得618元购车礼金
			br 
			| 还有机会获得500元油卡及实物奖品一份
		.carts
			.cart
			.cart
			.cart
		.btns
			.get-draw(:class="{active:drawTip}")
			.btn(@click="showDraw") 获取抽卡资格
			.btn(@click="popupFail=true") 开始抽卡
		//- van-loading(color="#1989fa" size="40px")
		van-overlay(:show="overlay" @click="hideDraw")
		van-popup(v-model="popupFail")
			.dialog
				h4.dialog-title 恭喜获得!
				.dialog-body
					.cart
					.txt tips：卡面集齐618元即可获得618购车礼金！还有机会获得
						span 500元油卡
						|与
						span 实物礼品~
					.btn(@click="popupSucc=false") 收下
			.dialog-close(@click="popupSucc=false")
		van-popup(v-model="popupFail")
			.dialog
				h4.dialog-title 很遗憾!
				.dialog-body
					.cry
					.fail-txt 什么也没有抽到，再来一次吧！
					.txt tips：卡面集齐618元即可获得618购车礼金！还有机会获得
						span 500元油卡
						|与
						span 实物礼品~
					.btn(@click="popupFail=false") 好的
			.dialog-close(@click="popupFail=false")
		Rule(ref="ruleElem")
</template>

<script>
import Rule from '../components/rule'

export default {
  name: 'Index',
  components: {
    Rule
  },
  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get('http://47.94.236.163/api/article')
  //   return { list: data.data }
  // },
  data() {
    return {
      overlay: false,
      drawTip: false,
      popupSucc: false,
      popupFail: false,
      drawNums: 1
    }
  },
  methods: {
    showRule() {
      this.$refs.ruleElem.show = true
    },
    showDraw() {
      this.overlay = true
      this.drawTip = true
    },
    hideDraw() {
      this.overlay = false
      this.drawTip = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../components/style';
.container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url('../assets/images/bg.jpg') no-repeat 50% / 100% 100%;
  position: relative;
  font-size: 22px;
}
.status {
  display: flex;
  align-items: center;
  padding: 30px;
  .avatar {
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
  }
  p {
    margin: 0 10px;
    padding: 2px 12px;
    background: rgba(166, 176, 233, 1);
    border: 2px solid rgba(87, 70, 140, 1);
    border-radius: 10px;
    font-weight: bold;
    color: rgba(33, 21, 54, 1);
    line-height: 36px;
    span {
      color: #dc0d00;
    }
  }
  .audio {
    margin-left: auto;
    width: 50px;
    height: 50px;
    background: url('../assets/images/audio.png') no-repeat center / 100%;
  }
}
.pack {
  margin-left: auto;
  margin-right: 30px;
  width: 50px;
  height: 68px;
  background: url('../assets/images/pack2.png') no-repeat center / 100%;
}
.title {
  margin: 580px 0 16px;
  font-size: 22px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
  background: linear-gradient(
    0deg,
    rgba(209, 234, 250, 1) 0%,
    rgba(112, 166, 223, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.desc {
  text-align: center;
  font-size: 20px;
  color: rgba(254, 169, 105, 1);
  background: linear-gradient(
    -3deg,
    rgba(254, 169, 105, 1) 0%,
    rgba(254, 219, 151, 1) 47.119140625%,
    rgba(255, 255, 255, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.carts {
  display: flex;
  justify-content: center;
  .cart {
    width: 160px;
    height: 200px;
    margin: 34px 20px;
    &:nth-child(1) {
      background: url('../assets/images/cart100.png') no-repeat center / 100%;
    }
    &:nth-child(2) {
      background: url('../assets/images/cart10.png') no-repeat center / 100%;
    }
    &:nth-child(3) {
      background: url('../assets/images/cart8.png') no-repeat center / 100%;
    }
  }
}
.get-draw {
  display: none;
  position: absolute;
  width: 534px;
  height: 204px;
  left: 90px;
  bottom: 140px;
  z-index: 101;
  background: url('../assets/images/getdraw.png') no-repeat center / 100%;
  &.active {
    display: block;
  }
}
</style>
