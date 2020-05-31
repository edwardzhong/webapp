<template lang="pug">
van-popup(v-model="show")
	.dialog
		h4.dialog-title 活动规则
		.dialog-body
			p 1、活动期间，用户登录京东App通过相应会场进入购车梦想金瓜分活动页，参与用户每日登陆即可获得1次抽卡机会也可通过页面提示的小任务来获取额外抽卡次数，以集卡形式不断抽取梦想金卡片。
			p 2、梦想金卡片金额分为
				span 100元、 10元、8元
				|及
				span 神秘卡片
				|；用户在活动周期内集成的购车梦想金卡片面值凑够618元（例如：12张50、1张10元、1张8元）便可合成并领取实物奖品及618优惠购车权益。获得神秘卡的用户将获得卡片上对应的福利权益。
	.dialog-close(@click="show=false")
</template>
<script>
export default {
  name: 'Rule',
  data() {
    return {
      show: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import './style';
</style>
