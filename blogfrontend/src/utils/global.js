import Vue from 'vue'
// 回到底部
const toBottom = function(dom, expands) {
  const index = expands.join('')
  const offsetTop = dom.querySelectorAll('.el-table__body-wrapper>table tbody')[0].childNodes[+index].offsetTop
  if (document.documentElement) {
    document.documentElement.scrollTop = dom.offsetTop + +offsetTop
  } else {
    document.body.scrollTop = dom.offsetTop + +offsetTop
  }
}

const isShow = function(itemValue, item) {
  return itemValue.includes(item)
}

const isFocus = false
Vue.prototype.$isShow = isShow
Vue.prototype.$toBottom = toBottom
Vue.prototype.$isFocus = isFocus

