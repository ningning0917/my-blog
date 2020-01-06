import tui from './tui'

const install = function(Vue) {
  Vue.directive('tui', tui)
}
if (window.Vue) {
  window['tui'] = tui
  Vue.use(install); // eslint-disable-line
}

tui.install = install
export default tui
