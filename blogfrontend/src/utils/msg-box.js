/**
 * 2019-05-09
 * END 封装消息弹出框
 * @class MsgBox
 */
import Vue from 'vue'
const vm = new Vue()
class MsgBox {
  /**
   * @param { object } options
   * @param { string } text 消息框内容
   * @param { string } title 消息框标题
   * @param { string } type 类型
   * @param { string } okMsg 确认提示消息
   * @param { string } cancelMsg 取消提示消息
   * @memberof MsgBox
   */
  $confirm({
    text = '此操作将永久删除, 是否继续?',
    title = '提示',
    type = 'warning',
    cancelMsg = '已取消操作',
    confirmButtonText = '确定',
    cancelButtonText = '取消'
  } = {}) {
    return new Promise(resolve => {
      vm.$confirm(text, title, {
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        type: type
        // beforeClose: (action, instance, done) => {
        //   if (action === 'confirm') {
        //     instance.confirmButtonLoading = true
        //     setTimeout(() => {
        //       done()
        //       setTimeout(() => {
        //         instance.confirmButtonLoading = false
        //       }, 300)
        //     }, 300)
        //   } else {
        //     done()
        //   }
        // }
      }).then(() => {
        resolve(true)
      }).catch(() => {
        vm.$message({
          type: 'info',
          message: cancelMsg
        })
      })
    })
  }
}

export default new MsgBox()
