import '@babel/polyfill'

import Vue from 'vue'
require('es6-promise').polyfill()
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('../src/assets/loading.png')
})

import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://127.0.0.1:7001'
  // vuex: {
  //   store,
  //   actionPrefix: 'SOCKET_',
  //   mutationPrefix: 'SOCKET_'
  // },
  // options: { path: "/my-app/" } //Optional options
}))

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // internationalization
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import '@/directive/index'

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)
import vshare from 'vshare'
Vue.use(vshare)

// 全局自定义指令
Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
import * as filters from './filters' // global filters
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
import '@/utils/global'

import VueBus from 'vue-bus'
Vue.use(VueBus)

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import msgBox from './utils/msg-box'
Vue.prototype.$Msgbox = window.msgBox = msgBox

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
