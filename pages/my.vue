<template lang="pug">
.container
	header
		nuxt-link(to="/").icon-btn
			van-icon(name="arrow-left" size="20px" color="#383072")
		.user
			.avatar
			.info
				h2 会飞的猪
				p 京豆  10
		.rule(@click="showRule") 活动规则
	.body
		h3 我的合成
			.spot
			.spot
			.spot
		.block
			p 卡片暂未收集成功
			nuxt-link(to="/") 去集卡&gt;&gt;
		h3 我的奖品
			.spot
			.spot
			.spot
		.block
			p 暂未获得实物奖品
	Rule(ref="ruleElem")
</template>

<script>
import Rule from '../components/rule'
export default {
  name: 'My',
  components: {
    Rule
  },
  methods: {
    showRule() {
      this.$refs.ruleElem.show = true
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url('../assets/images/mybg.jpg') no-repeat 50% / 100% 100%;
  position: relative;
  font-size: 22px;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 35px;
}
.icon-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  padding: 8px;
  background: rgba(236, 244, 255, 1);
  border: 2px solid rgba(52, 42, 109, 1);
}
.user {
  display: flex;
  padding: 10px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
}
.info {
  flex: none;
  padding: 10px 24px;
  h2 {
    font-size: 30px;
    color: #fff;
    max-width: 200px;
    white-space: nowrap;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-size: 20px;
    color: rgba(247, 223, 99, 1);
    line-height: 2;
  }
}
.rule {
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 24px;
  color: rgba(52, 42, 109, 1);
  background: rgba(236, 244, 255, 1);
  border: 2px solid rgba(52, 42, 109, 1);
}
.body {
  padding: 0 34px 34px;
  h3 {
    font-size: 30px;
    color: #fff;
    padding: 30px 12px 10px;
    .spot {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin: 0 12px;
      border: 1px solid rgba(106, 57, 6, 1);
      &:nth-child(1) {
        background: #d4ff67;
      }
      &:nth-child(2) {
        background: #fff;
      }
      &:nth-child(3) {
        background: #f39800;
      }
    }
  }
}
.block {
  padding: 35px;
  background: rgba(236, 244, 255, 1);
  border-radius: 10px;
  text-align: center;
  p {
    margin: 30px 0;
    font-size: 24px;
    color: #666;
  }
  a {
    display: inline-block;
    margin: 20px 0;
    padding: 15px 34px;
    background: rgba(89, 91, 179, 1);
    border: 1px solid rgba(106, 57, 6, 1);
    box-shadow: 0px 5px 4px 1px rgba(0, 30, 127, 0.25);
    border-radius: 30px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
}
</style>
