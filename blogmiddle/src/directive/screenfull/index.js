import screenfull from './screenfull'

const install = function(Vue) {
  Vue.directive('screenfull', screenfull)
}

if (window.Vue) {
  window['screenfull'] = screenfull
  Vue.use(install); // eslint-disable-line
}

screenfull.install = install
export default screenfull
