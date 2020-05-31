import Vue from 'vue'
import { Popup, Overlay, Icon } from 'vant'
import VueClipboard from 'vue-clipboard2'
export default () => {
  Vue.use(Popup)
  Vue.use(Overlay)
  Vue.use(Icon)
  Vue.use(VueClipboard)
}
