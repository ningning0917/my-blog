'use strict'
const Controller = require('egg').Controller
const WechatAPI = require('co-wechat-api')

const weChatOAuth = {
  appId: 'wx97fb599e32a2a15c',
  secret: 'a667b8aa09eadcadc610d27e2d0022d4',
  token: 'webrabbit'
}
const tokenCache = {
  access_token: '',
  updateTime: Date.now(),
  expires_in: 7200,
  openId: ''
}
const api = new WechatAPI(
  weChatOAuth.appId,
  weChatOAuth.secret,
)
class weChatOAuthController extends Controller {
  async getOAuth() {
    const { ctx } = this
    const param = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${weChatOAuth.appId}&secret=${weChatOAuth.secret}`
    const res = await ctx.curl(param, {
      dataType: 'json'
    })
    Object.assign(tokenCache, res.data, {
      updateTime: Date.now()
    })
    ctx.body = res.data
  }
  async getFollowers() {
    const { ctx } = this
    const url = `https://api.weixin.qq.com/cgi-bin/user/get?access_token=${tokenCache.access_token}`
    const res = await ctx.curl(url, {
      dataType: 'json'
    })
    ctx.session.openid = await res.data.data.openid[0]
    ctx.body = res.data
  }
  async getInfo() {
    const { ctx } = this
    let res = await api.getFollowers()
    res = await api.batchGetUsers(res.data.openid, 'zh_CN')
    ctx.body = res
  }
}

module.exports = weChatOAuthController

