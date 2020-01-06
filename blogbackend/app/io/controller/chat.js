'use strict'

const Controller = require('egg').Controller
const room = 'default_room'

class ChatController extends Controller {
  async index(req) {
    // console.log('headers = ' + JSON.stringify(req.headers))// 包含了各种header，包括x-forwarded-for(如果被代理过的话)
    // console.log('x-forwarded-for = ' + req.header('x-forwarded-for'))// 各阶段ip的CSV, 最左侧的是原始ip
    // console.log('ips = ' + JSON.stringify(req.ips))// 相当于(req.header('x-forwarded-for') || '').split(',')
    // console.log('remoteAddress = ' + req.connection.remoteAddress)// 未发生代理时，请求的ip
    // console.log('ip = ' + req.ip)// 同req.connection.remoteAddress, 但是格式要好一些
    // res.send('Hello World')

    const { app, socket } = this.ctx
    const id = socket.id
    const nsp = app.io.of('/')
    // const usocket = app.usocket.getState()
    const info = this.ctx.args[0]
    // app.post('/', app.controller.webscoket.index)
    // console.log(this.ctx.cookies.get('nickName', {
    //   maxAge: 1000 * 3600 * 24,
    //   httpOnly: false, // 默认就是 true
    //   encrypt: false // 加密传输
    // }), '13')

    // nsp.sockets[id].emit('res', 'hello ....')
    // 指定房间连接信息列表
    nsp.adapter.clients([room], (err, clients) => {
      console.log(JSON.stringify(clients), 'list')
    })

    const city = await this.ctx.model.ChatUser.findOne({ where: { nickname: info.nickName }})

    console.log(info, 'city12')

    await this.ctx.model.Chat.create({
      nickName: info.nickName,
      cityName: city.cityName,
      chatContent: info.info
    })

    const chatObj = await this.ctx.model.Chat.findOne({ where: { nickname: info.nickName }})
    socket.emit('res', {
      nickName: info.nickName,
      cityName: city.cityName,
      chatContent: info.info,
      createAt: chatObj.createAt
    })
    //  给指定房间的每个人发送消息
    // this.ctx.socket.disconnect()
  }
}
module.exports = ChatController
