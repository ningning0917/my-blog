export default {
  bind(el, binding, vnode, oldVnode) {

  },
  inserted(el, binding, vnode, oldVnode) {
    // 当前宽高
    (function() {
      'use strict'
      var txtMain // 输入框
      var spPreview // 预览框

      function getInput() {
        return el.querySelector('.CodeMirror-scroll')
      }

      function getPreview() {
        return el.querySelector('.te-preview')
      }

      function scrollEvent() {
        txtMain = getInput()
        spPreview = getPreview()

        if (txtMain === undefined) {
          return
        }
        if (spPreview === undefined) {
          return
        }
        function scrolling(who) {
          if (who === 'pre') {
            txtMain.scrollTop = Math.round((spPreview.scrollTop + spPreview.clientHeight) * txtMain.scrollHeight / spPreview.scrollHeight - txtMain.clientHeight)
            return
          }
          if (who === 'main') {
            spPreview.scrollTop = Math.round((txtMain.scrollTop + txtMain.clientHeight) * spPreview.scrollHeight / txtMain.scrollHeight - spPreview.clientHeight)
            return
          }
        }

        getInput().onscroll = function() {
          scrolling('main')
        }

        getPreview().onscroll = function() {
          scrolling('pre')
        }
      }
      scrollEvent()
    })()
  }
}
