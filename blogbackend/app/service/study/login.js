
const JSEncrypt = require('node-jsencrypt')

const Service = require('egg/index').Service

class LoginService extends Service {
  async login(_content) {
    return {
      code: 200,
      body: {
        a: _content
      }
    }
  }
  async register(_content) {
    const { ctx } = this
    const { content, avatar } = _content
    const jsEncrypt = new JSEncrypt()
    jsEncrypt.setPrivateKey(this.app.config.private_key)
    _content = jsEncrypt.decrypt(content)
    if (!_content) {
      ctx.failure('验证失败!')
      return
    }
    const { username, password } = JSON.parse(_content)
    const user = await ctx.model.User.findOne({ where: { username }})
    if (user) {
      return {
        code: 201,
        msg: '用户名已存在'
      }
    }
    await ctx.model.User.add(username, password, avatar)
    return {
      code: 200,
      msg: '注册成功'
    }
  }
}

module.exports = LoginService

