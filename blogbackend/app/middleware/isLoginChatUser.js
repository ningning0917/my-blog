
module.exports = () => {
  return async function(ctx, next) {
    // 如果 Session 是空的，则不保存
    if (ctx.cookies.get('nickName', {
      maxAge: 1000 * 3600 * 24,
      httpOnly: false, // 默认就是 true
      encrypt: false // 加密传输
    })) {
      await next()
    } else {
      if (ctx.acceptJSON) {
        ctx.session.error = 'Access denied!'
        ctx.body = {
          code: 201,
          msg: 'AccessDenied'
        }
      } else {
        const path = ctx.request.path
        ctx.session.error = 'Access denied!'
        ctx.body = {
          code: 201,
          msg: 'AccessDenied'
        }
        // ctx.redirect(redi)
      }
    }
  }
}
