export default {
  bind(el, binding, vnode, oldVnode) {

  },
  inserted(el, binding, vnode, oldVnode) {
    // 初始非全屏
    let isFullScreen = false
    // 当前宽高
    let nowWidth = 400
    let nowHight = 0
    const dialogHeaderEl = el.querySelector('.tui-editor-defaultUI-toolbar')
    // 弹窗
    const dragDom = el
    // 给弹窗加上overflow auto；不然缩小时框内的标签可能超出dialog；
    // 清除选择头部文字效果
    dialogHeaderEl.onselectstart = new Function('return false')
    // 头部加上可拖动cursor
    dialogHeaderEl.style.cursor = 'move'

    // 双击头部效果
    dialogHeaderEl.ondblclick = (e) => {
      if (isFullScreen === false) {
        nowHight = dragDom.clientHeight
        nowWidth = dragDom.clientWidth
        dragDom.style.left = 0
        dragDom.style.top = 0
        dragDom.style.height = '100VH'
        dragDom.style.width = '100VW'
        dragDom.style.marginTop = 0
        isFullScreen = true
        dialogHeaderEl.style.cursor = 'initial'
        dialogHeaderEl.onmousedown = null
        dragDom.style.position = 'fixed'
        dragDom.style.zIndex = '10000'
        dragDom.style.background = '#fff'
        dragDom.style.overflow = 'hidden'
        dialogHeaderEl.style.cursor = 'move'
        dragDom.onmouseover = function() {
          document.getElementById('app').style.overflow = 'hidden'
        }
      } else {
        dragDom.onmouseover = null
        document.getElementById('app').style.overflow = 'auto'
        dragDom.style.height = '300' + 'px'
        dragDom.style.width = nowWidth + 'px'
        isFullScreen = false
        dialogHeaderEl.style.cursor = 'move'
        dragDom.style.position = 'relative'
        dragDom.style.zIndex = 'none'
        dragDom.style.background = '#fff'
        dialogHeaderEl.style.cursor = 'move'
        console.log(el.querySelector('.CodeMirror-sizer').getBoundingClientRect().minHeight, 123)
      }
    }

    // 跟随滚动
  }
}
