import tableMove from './tableMove'

const install = function(Vue) {
  Vue.directive('tableMove', tableMove)
}

if (window.Vue) {
  window['tableMove'] = tableMove
  Vue.use(install); // eslint-disable-line
}

tableMove.install = install
export default tableMove
