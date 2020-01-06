export default {
  inserted(el, binding, vnode) {
    setTimeout(() => {
      console.log(document.querySelector('.tui-image-editor-download-btn'), '211')
      // document.querySelector('.tui-image-editor-download-btn').style.display = 'none'
      const btn = document.createElement('div')
      btn.style.width = '120px'
      btn.style.height = '40px'
      btn.style.backgroundColor = '#fdba3b'
      btn.style.borderColor = '#fdba3b'
      btn.style.position = 'fixed'
      btn.style.top = '0'
      btn.style.right = '0px'
      btn.style.lineHeight = '40px'
      btn.style.borderRadius = '40px'
      btn.style.margin = '8px'
      btn.innerHTML = '上传'
      btn.style.color = '#fff'
      btn.style.textAlign = 'center'
      btn.style.fontFamily = 'Noto Sans, sans-serif'

      el.append(btn)
      btn.onclick = function() {
        const dataUrl = document.querySelector('.lower-canvas').toDataURL('image/jpeg')
        binding.value(dataUrl)
      }
    }, 100)
  }
}
