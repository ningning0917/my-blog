'use strict'
const Controller = require('egg').Controller
const svgCaptcha = require('svg-captcha')

class MailController extends Controller {
  async sendMail() {
    const { ctx, service } = this
    const data = await service.mail.sendActiveMail('13166159781@163.com', 'w', '张三')
    ctx.body = {
      code: 200,
      data,
      msg: '请查看手机，激活邮箱'
    }
  }
  async captcha() {
    const { ctx } = this
    const c = svgCaptcha.create({
      ignoreChars: '0o1i',
      noise: 1,
      color: true,
      background: '#cc9966'
    })
    ctx.session.captcha = c.text
    ctx.body = {
      code: 200,
      data: c.data,
      msg: '获取成功'
    }
  }
}

module.exports = MailController

