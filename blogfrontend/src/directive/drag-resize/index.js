import dragResize from './dragResize'

const install = function(Vue) {
  Vue.directive('dragResize', dragResize)
}

if (window.Vue) {
  window['dragResize'] = dragResize
  Vue.use(install); // eslint-disable-line
}

dragResize.install = install
export default dragResize
