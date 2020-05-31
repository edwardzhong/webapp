<template lang="pug">
	.page-load
		.open-app
			p(@click="openApp")
		.content
			img.mall(src="../assets/images/download_app/mall.png")
			.doll-wrapper
				img(src="../assets/images/download_app/doll.png")
				.right
					p.mall-text 京东MALL+
					span 扫一扫立即参与
			.qrcode-group
				.qrcode1 qrcode
					img(src="../assets/images/qr_code/qr_code.png")
					span.text1 京东app扫二维码访问活动
					span.text2 长按或截屏进行保存
				.qrcode2 qrcode
					img(src="../assets/images/qr_code/mini_qr_code.jpg")
					span.text1 微信扫小程序码访问活动
					span.text2 长按或截屏进行保存
</template>

<script>
import { config } from '@/utils/config'
export default {
  data() {
    return {
      url: '',
      downloadAppOpt: {
        downAppURl:
          'https://wqs.jd.com/downloadApp/downloadAppIOSMPage.html?channel=jd-m',
        downAppIos:
          'https://itunes.apple.com/us/app/jing-dong-wang-gou-shou-dan/id414245413',
        downWeixin:
          'http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850',
        inteneUrl: 'openApp.jdMobile://virtual?',
        M_sourceFrom: 'mxz',
        inteneUrlParams: {
          category: 'jump',
          des: 'm',
          url: ''
        },
        autoOpenAppEventId: 'MDownLoadFloat_AppArouse',
        autoOpenAppEventParam: '',
        autoOpenIntervalTime: 30000,
        cookieFlag: '3songshu-DianLiangJingCai'
      }
    }
  },
  mounted() {
    this.downloadAppOpt.inteneUrlParams.url = this.url =
      config.url + location.search
    setTimeout(() => {
      this.autoOpenApp()
    }, 0)
  },
  methods: {
    autoOpenApp() {
      window.$.downloadAppPlugInOpenApp(this.downloadAppOpt)
    },
    openApp() {
      window.$.immediateOpenApp(this.downloadAppOpt)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-load {
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background: #fff;
}
.open-app {
  width: 100%;
  height: 92px;
  background: url('../assets/images/download_app/open_app.png') no-repeat center;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  p {
    width: 240px;
    height: 100%;
    opacity: 0;
  }
}
.content {
  width: 750px;
  height: calc(100vh - 92px);
  background: linear-gradient(
    0deg,
    rgba(202, 237, 215, 1),
    rgba(175, 224, 255, 1)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.mall {
  width: 663px;
  height: 421px;
}
.doll-wrapper {
  width: 633px;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  margin-top: 20px;
  img {
    width: 126px;
    height: 173px;
    margin-right: 30px;
  }
  .right {
    p {
      font-size: 48px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(0, 61, 117, 1);
      line-height: 36px;
    }
    span {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(104, 134, 169, 1);
      line-height: 30px;
    }
  }
}
.qrcode-group {
  width: 633px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  .qrcode {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 200px;
      height: 200px;
    }
    .text1 {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(104, 134, 169, 1);
      line-height: 1;
      margin: 34px 0 23px 0;
    }
    .text2 {
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(0, 61, 117, 1);
      line-height: 1px;
    }
  }
}
</style>
