import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import Vue from 'vue'

export default {
  inserted(el, binding, vnode) {
    const { value } = binding
    const pre = el.querySelectorAll('pre')
    const blocks = el.querySelectorAll('pre code')
    const copy = []
    for (let i = 0; i < pre.length; i++) {
      const div = document.createElement('div')
      div.className = 'copyBox'
      div.setAttribute('title', 'copy')
      copy.push(div)
      pre[i].style.position = 'relative'
    }
    for (let i = 0; i < pre.length; i++) {
      (function(num) {
        pre[num].append(copy[i])
        copy[num].onclick = function(e) {
          const sel = window.getSelection()
          sel.removeAllRanges()
          const range = document.createRange()
          range.selectNode(this.parentNode.children[0])
          sel.addRange(range)
          const txt = sel.anchorNode.innerText
          const area = document.createElement('textarea')
          area.innerHTML = txt
          area.select()
          document.execCommand('copy')
          Vue.prototype.$message({
            message: '复制成功',
            type: 'success',
            duration: 1500
          })
        }
      })(i)
    }
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
