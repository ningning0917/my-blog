import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'

import { OSnow } from '../../utils'

const doTableMove = function(el) {
  const pcSyS = OSnow()
  const dom = el.getElementsByClassName('el-table__body-wrapper')[0].getElementsByTagName('table')[0]
  const domHeader = el.getElementsByClassName('el-table__header-wrapper')[0].getElementsByTagName('table')[0]
  if (pcSyS !== 'mac') {
    const outDiv = el.getElementsByClassName('el-table__body-wrapper')[0]
    outDiv.onwheel = function(event) {
      // 禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）
      event.preventDefault()
      dom.style.transform = 'translate(0,0)'
      domHeader.style.transform = 'translate(0,0)'
      // 设置鼠标滚轮滚动时屏幕滚动条的移动步长
      const step = 50
      if (event.deltaY < 0) {
        // 向上滚动鼠标滚轮，屏幕滚动条左移
        this.scrollLeft -= step
      } else {
        // 向下滚动鼠标滚轮，屏幕滚动条右移
        this.scrollLeft += step
      }
    }
  }
}

export default {
  bind(el) {
    el.resizeListener = () => {
      doTableMove(el)
    }
    addResizeListener(window.document.body, el.resizeListener)
  },
  inserted(el) {
    doTableMove(el)
  },
  unbind(el) {
    removeResizeListener(window.document.body, el.resizeListener)
    const outDiv = el.getElementsByClassName('el-table__body-wrapper')[0]
    outDiv.removeEventListener('wheel', doTableMove)
  }
}

