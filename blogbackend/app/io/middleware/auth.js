'use strict'

const room = 'default_room'
module.exports = () => {
  return async(ctx, next) => {
    const { socket } = ctx
    // 权限校验通过
    // ctx.socket.emit('res', 'auth success')
    // 加入房间
    socket.join(room)
    // 放行
    await next()
    console.log('断开连接')
  }
}

