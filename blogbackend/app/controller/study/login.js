'use strict'
const axios = require('axios')
const querystring = require('querystring')

const ms = require('ms')
const bcrypt = require('bcryptjs')
const JSEncrypt = require('node-jsencrypt')
const moment = require('moment')
const { public_key } = require('../../../config/config.default')
const { toInt } = require('../../extend/context')
const { verifyToken } = require('../../extend/context')

module.exports = app => {
  return class LoginController extends app.Controller {
    async login(ctx) {
      const { content } = ctx.request.body
      const jsEncrypt = new JSEncrypt()
      jsEncrypt.setPrivateKey(this.app.config.private_key)
      const _content = jsEncrypt.decrypt(content)
      if (!_content) {
        ctx.failure('验证失败!')
        return
      }
      const json = JSON.parse(_content)
      const { username, password, rememberMe } = json
      const user = await ctx.model.User.findOne({ where: { username }})
      if (!user) {
        ctx.failure('用户名或密码错误!')
        return
      }
      if (user.status === 'C') {
        ctx.failure('该用户已禁止登录!')
        return
      }
      const userLogin = await ctx.model.UserLogin.findOne({ where: { loginString: username }})
      if (!userLogin) {
        ctx.failure('用户登录信息不存在!')
        return
      }
      const res = bcrypt.compareSync(password, userLogin.password)
      if (res) {
        ctx.session.uid = user.uid
        ctx.session.username = username
        ctx.session.nickname = user.nickname
        ctx.session.visited = ctx.session.visited ? ctx.session.visited++ : 1
        if (rememberMe) ctx.session.maxAge = ms('7d')
        else ctx.session.maxAge = ms('2h')
        // 调用 rotateCsrfSecret 刷新用户的 CSRF token
        await ctx.model.UserLoginL.create({ uid: user.uid, loginString: username, loginLogType: 'L' })
        user.update({
          loginNum: user.loginNum + 1,
          lastLoginTime: moment()
        })
        const token = ctx.helper.loginToken(
          {
            corpid: user.uid,
            userid: username
          },
          7200
        ) // token生成
        await this.app.redis.get('loginToken').set(
          user.uid + username,
          token,
          'ex',
          7200
        ) // 保存到redis
        ctx.success({
          token,
          expires: this.config.login_token_time
        }, '登录成功')
      } else {
        ctx.failure('用户名或密码错误!')
      }
    }
    async getInfo(ctx) {
      const { token } = ctx.request.body
      const dnToken = await verifyToken(token)
      const username = dnToken.userid
      const userInfo = await ctx.model.User.findOne({ where: { username }})
      ctx.success({
        roleActions: [''],
        roles: ['admin'],
        name: '',
        avatar: userInfo.avatar,
        introduction: '',
        userInfo
        // todo
      })
    }
    async logout(ctx) {
      const authToken = ctx.header.authorization // 获取header里的authorization
      const uid = ctx.session.uid
      console.log(ctx.session.username, ' ctx.session.username')
      if (!uid) {
        ctx.success('退出成功!')
      }
      // const username = ctx.session.username
      // ctx.session = null
      // await ctx.model.UserLoginL.create({ uid, loginString: username, loginLogType: 'Q' })
      // ctx.success('退出成功!')
    }

    async register(ctx) {
      const params = ctx.request.body
      ctx.body = await ctx.service.study.login.register(params)
    }

    async userList(ctx) {
      const { page, pageSize } = ctx.request.body
      const data = await ctx.model.User.findAll({
        offset: page, // 数据偏移量
        limit: toInt(pageSize)
      })
      let totalCount = await this.app.model.query('select COUNT(*) from user', { type: 'SELECT' })
      totalCount = totalCount[0]['COUNT(*)']
      ctx.body = {
        code: 200,
        data,
        totalNum: totalCount,
        msg: '请求成功'
      }
    }

    async github(ctx) {
      const { code } = ctx.request.body
      const params = {
        client_id: this.config.client_id,
        client_secret: this.config.client_secret,
        code
      }
      let res = await axios.post('https://github.com/login/oauth/access_token', params)
      const access_token = querystring.parse(res.data).access_token
      res = await axios.get('https://api.github.com/user?access_token=' + access_token)

      const { login, avatar_url } = res.data
      const data = {
        name: login,
        password: '123',
        id: '11',
        avatar: avatar_url
      }
      console.log(data, 'data----test')
      const user = await ctx.model.User.findOne({ where: { username: data.name }})
      console.log(user, 'user')
      if (user) {
        await ctx.model.UserLoginL.create({ uid: user.uid, loginString: data.name, loginLogType: 'L' })
        user.update({
          loginNum: user.loginNum + 1,
          lastLoginTime: moment()
        })
        const token = ctx.helper.loginToken(
          {
            corpid: user.uid,
            userid: data.name
          },
          7200
        ) // token生成
        console.log('---token生成---')
        await this.app.redis.get('loginToken').set(
          user.uid + data.name,
          token,
          'ex',
          7200
        ) // 保存到redis
        console.log('--保存到redis--')
        ctx.success({
          token,
          expires: 7200
        }, '登录成功')
      } else {
        await ctx.model.User.add(data.name, data.password, data.avatar) // 注册
        console.log('注册成功-----')
        const user2 = await ctx.model.User.findOne({ where: { username: data.name }})
        user2.update({
          loginNum: user2.loginNum + 1,
          lastLoginTime: moment()
        })
        await ctx.model.UserLoginL.create({ uid: user2.uid, loginString: data.name, loginLogType: 'L' })
        const token = ctx.helper.loginToken(
          {
            corpid: user2.uid,
            userid: data.name
          },
          7200
        ) // token生成
        await this.app.redis.get('loginToken').set(
          user2.uid + data.name,
          token,
          'ex',
          7200
        ) // 保存到redis
        ctx.success({
          token,
          expires: 7200
        }, '登录成功')
      }
    }

    async githubLogin(ctx) {
      ctx.session.returnTo = ctx.path
      ctx.body = `
        <div>
          <h2>${ctx.path}</h2>
          Login with
          <a href="/passport/github">Github</a> 
        </div>
      `
    }
  }
}
