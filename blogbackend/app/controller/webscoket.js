'use strict'

const Controller = require('egg').Controller
const room = 'default_room'

class WebscoketController extends Controller {
  async index() {
    const { app, socket, query } = this.ctx
    // 给谁发, socket连接的id
    const { id, input } = this.ctx.request.body

    const nsp = app.io.of('/')
    this.ctx.app.io.of('/').to(room).emit('res', {
      nickName: input,
      cityName: '123'
    })
    // if (nsp.sockets[id]) {
    //   // 通过id给指定socket连接发送消息
    //   nsp.sockets[id].emit('res', {
    //     nickName: input
    //     // cityName:
    //   })
    // }
    this.ctx.body = {
      code: 200,
      data: input,
      msg: '发送成功'
    }
  }
  async chatLogin() {
    const { ctx } = this
    // 给谁发, socket连接的id
    const { nickname, cityName } = ctx.request.body
    console.log(cityName, 'cityName')
    const data = await ctx.model.ChatUser.findOne({ where: { nickname }})
    if (data) {
      this.ctx.body = {
        code: 201,
        msg: '昵称已存在'
      }
    } else {
      await ctx.model.ChatUser.create({ nickname, cityName })
      ctx.cookies.set('nickName', new Buffer(nickname).toString('base64'), {
        maxAge: 1000 * 3600 * 24,
        httpOnly: false, // 默认就是 true
        encrypt: false // 加密传输
      })
      ctx.cookies.set('cityName', new Buffer(cityName).toString('base64'), {
        maxAge: 1000 * 3600 * 24,
        httpOnly: false, // 默认就是 true
        encrypt: false // 加密传输
      })
      ctx.body = {
        code: 200,
        msg: '创建账号成功'
      }
    }
  }
  async userList() {
    const { ctx } = this
    const userList = await ctx.model.ChatUser.findAll()
    ctx.body = {
      code: 200,
      data: userList
    }
  }

  async chatList() {
    const { ctx } = this
    const chatList = await ctx.model.Chat.findAll()
    ctx.body = {
      code: 200,
      data: chatList
    }
  }
}

module.exports = WebscoketController
