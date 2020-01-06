const Controller = require('egg').Controller

class chat extends Controller {
  async chat() {
    const { ctx, app } = this
    const usocket = app.usocket.getState()
    const info = ctx.args[0]
    const message = ctx.args[1]
    console.log(usocket, info, message, '123')
  }
  // 视频聊天请求
  async videoReq() {
    const { ctx, app } = this
    const usocket = app.usocket.getState()
    const info = ctx.args[0]
  }
}
module.exports = chat
