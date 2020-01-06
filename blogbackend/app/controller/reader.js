'use strict'
const Controller = require('egg').Controller

class ReaderController extends Controller {
  async readerList() {
    const ctx = this.ctx
    try {
      const data = await ctx.model.Commenter.findAll()
      ctx.body = {
        code: 200,
        data,
        msg: '请求成功'
      }
    } catch (err) {
      console.log(err, ctx.request.body)
    }
  }
}

module.exports = ReaderController

