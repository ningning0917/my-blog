import syncRoll from './syncRoll'

const install = function(Vue) {
  Vue.directive('syncRoll', syncRoll)
}

if (window.Vue) {
  window['syncRoll'] = syncRoll
  Vue.use(install); // eslint-disable-line
}

syncRoll.install = install
export default syncRoll
