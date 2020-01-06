import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
// vuex 持久化 全局设置
// const handleStore = store => {
// if (localStorage.store) store.replaceState(JSON.parse(localStorage.store)) // 初始化store
// store.subscribe((mutation, state) => {
//   console.log(state)
//   localStorage.setItem('store', JSON.stringify(state))
// })
// }

const store = new Vuex.Store({
  modules,
  getters,
  plugins: [createLogger()]
  // plugins: [handleStore]
})

export default store
