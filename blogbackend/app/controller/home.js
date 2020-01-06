'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { app, socket, query } = this.ctx
    // 给谁发, socket连接的id
    const { id, input } = this.ctx.request.body
    console.log(id, input, '123')
    const nsp = app.io.of('/')
    if (nsp.sockets[id]) {
      // 通过id给指定socket连接发送消息
      nsp.sockets[id].emit('res', input)
    }
    this.ctx.body = {
      code: 200,
      data: input,
      msg: '发送成功'
    }
  }
  async render() {
    const ctx = this.ctx
    console.log(ctx.isAuthenticated(), '1111')
    if (ctx.isAuthenticated()) {
      ctx.body = `<div>
        <h2>${ctx.path}</h2>
        <hr>
        Logined user: <img src="${ctx.user.photo}"> ${ctx.user.displayName} / ${ctx.user.id} | <a href="/logout">Logout</a>
        <pre><code>${JSON.stringify(ctx.user, null, 2)}</code></pre>
        <hr>
        <a href="/">Home</a> | <a href="/user">User</a>
      </div>`
    } else {
      ctx.session.returnTo = ctx.path
      ctx.body = `
        <div>
          <h2>${ctx.path}</h2>
          <hr>
          Login with
          <a href="/passport/weibo">Weibo</a> | <a href="/passport/github">Github</a> |
          <a href="/passport/bitbucket">Bitbucket</a> | <a href="/passport/twitter">Twitter</a> |
          <a href="/passport/yuque">YuQue 语雀</a>
          <hr>
          <a href="/">Home</a> | <a href="/user">User</a>
        </div>
      `
    }
  }
}

module.exports = HomeController
