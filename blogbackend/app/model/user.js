/**
 * user Model
 * @param app
 * @returns {*}
 */
// 导入加密模块
const bcrypt = require('bcryptjs')
module.exports = app => {
  const user = app.model.import('../domain/user')
  user.add = async function(username, pass, avatar) {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const password = bcrypt.hashSync(pass, salt)
    const user = await this.create({
      username, avatar,
      userType: 'C'
    })
    // 写入登录表
    await app.model.UserLogin.create({
      loginString: username,
      password,
      uid: user.uid,
      salt
    })
  }
  return user
}
