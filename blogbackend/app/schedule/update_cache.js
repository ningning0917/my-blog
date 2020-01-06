module.exports = {
  schedule: {
    interval: '5s', // 1 分钟间隔
    type: 'worker' // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    // const res = await ctx.curl('http://www.api.com/cache', {
    //   dataType: 'json'
    // })
    // ctx.app.cache = res.data
    // this.ctx.socket.emit('res', '123')
    // console.log(1)
    // const data = await ctx.service.user.say()
    // ctx.socket.emit('res', 'data')
    // ctx.socket.emit('res', 'data')
    // ctx.app.io.socket.emit('res', data)
  }
}
