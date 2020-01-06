'use strict'
const { toInt, parseTime, uniqueArr } = require('../extend/context')

const Controller = require('egg').Controller
const UUID = require('uuid')

const { Sequelize } = require('sequelize')
const Op = Sequelize.Op

class ArticleController extends Controller {
  async create() {
    const ctx = this.ctx
    try {
      const { title, content, summary, author, imageUrl, publishTime, importance, label } = ctx.request.body
      const labelName = label.join(',')
      const uid = UUID.v1()
      const labelIns = []
      await ctx.model.Article.create({ uid, title, content, summary, author, imageUrl, publishTime, importance, label: labelName })
      for (let i = 0; i < label.length; i++) {
        labelIns[i] = await ctx.model.Label.findOne({ where: { labelName: label[i] }})
        labelIns[i].update({
          uid: labelIns[i].uid ? labelIns[i].uid + ',' + uid : uid
        })
      }
      ctx.body = {
        code: 200,
        msg: '创建成功'
      }
    } catch (err) {
      ctx.body = {
        code: 201,
        msg: err
      }
    }
  }
  async update() {
    const ctx = this.ctx
    try {
      const { uid, title, content, summary, author, imageUrl, publishTime, importance, label, recommend } = ctx.request.body
      const labelName = label.join(',')
      const labelIns = []
      const article = await ctx.model.Article.findOne({ where: { uid }})
      const articleObj = await ctx.model.Article.findAll()
      for (let i = 0; i < articleObj.length; i++) {
        articleObj[i].update({
          recommend: '0'
        })
      }
      article.update({
        title, content, summary, author, imageUrl, publishTime, importance, label: labelName, recommend,
      })
      for (let i = 0; i < label.length; i++) {
        labelIns[i] = await ctx.model.Label.findOne({ where: { labelName: label[i] }})
        labelIns[i].update({
          uid: labelIns[i].uid ? labelIns[i].uid + ',' + uid : uid
        })
      }
      ctx.body = {
        code: 200,
        msg: '更新成功'
      }
    } catch (err) {
      ctx.body = {
        code: 201,
        msg: err
      }
    }
  }
  async list() {
    const ctx = this.ctx
    const { page, limit } = ctx.request.body
    try {
      let total = await this.app.model.query('select COUNT(*) from article', { type: 'SELECT' })
      total = total[0]['COUNT(*)']

      const data = await ctx.model.Article.findAll({
        offset: (page - 1) * limit, // 数据偏移量
        limit,
        order: [
          ['modifyTime', 'DESC']
        ],
        where: {
          publishTime: {
            [Op.lt]: new Date()
          }
        }
      })
      ctx.body = {
        code: 200,
        data,
        total: toInt(total),
        msg: '请求成功'
      }
    } catch (err) {
      console.log(err, ctx.request.body)
    }
  }
  async detail() {
    const ctx = this.ctx
    const { id } = ctx.request.body
    const data = await ctx.model.Article.findOne({ where: { uid: id }})
    data.label = data.label && data.label.split(',') || []
    ctx.body = {
      code: 200,
      data,
      msg: '请求成功'
    }
  }
  async addSee() {
    const ctx = this.ctx
    const { id } = ctx.request.body
    try {
      const article = await ctx.model.Article.findOne({ where: { uid: id }})
      article.update({
        see: toInt(article.see) + 1
      })
      ctx.body = {
        code: 200,
        msg: '请求成功'
      }
    } catch (e) {
      console.log(e, 'e')
    }
  }

  async addZan() {
    const ctx = this.ctx
    const { id, isZan } = ctx.request.body
    try {
      const article = await ctx.model.Article.findOne({ where: { uid: id }})
      article.update({
        zan: isZan ? toInt(article.zan) + 1 : toInt(article.zan) - 1
      })
      const zan = toInt(article.zan)
      ctx.body = {
        code: 200,
        data: {
          zanCount: zan,
          isZan
        },
        msg: '请求成功'
      }
    } catch (e) {
      console.log(e, 'e')
    }
  }
  async getTotal() {
    const ctx = this.ctx
    try {
      let total = await ctx.model.Article.findAndCountAll()
      total = total.count
      ctx.body = {
        code: 200,
        total: toInt(total),
        msg: '请求成功'
      }
    } catch (err) {
      console.log(err)
    }
  }
  async recommend() {
    const ctx = this.ctx
    try {
      const data = await ctx.model.Article.findOne({
        where: {
          recommend: '1'
        }
      })
      console.log(data, 'data')
      ctx.body = {
        code: 200,
        data,
        msg: '请求成功'
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        code: 201,
        msg: err
      }
    }
  }
  async getRecommend() {
    const ctx = this.ctx
    const { uid } = ctx.request.body
    console.log(uid, 'id')
    try {
      const data = await ctx.model.Article.findOne({ where: { uid }})
      let label = data.label
      const recommend = []
      let uids = ''
      if (label.indexOf(',')) {
        label = label.split(',')
        for (let i = 0; i < label.length; i++) {
          recommend.push(await ctx.model.Label.findOne({ where: { labelName: label[i] }}))
        }
      }
      for (let i = 0; i < recommend.length; i++) {
        uids += recommend[i].uid + ','
      }
      const recommendData = []
      const tempArr = []
      if (uids.indexOf(',')) {
        uids = uids.split(',')
        uids = uniqueArr(uids)
        for (let i = 0; i < uids.length; i++) {
          if (uids[i]) {
            tempArr[i] = await ctx.model.Article.findOne({ where: { uid: uids[i] }})
            recommendData.push({
              uid: tempArr[i].uid,
              title: tempArr[i].title
            })
          }
        }
      } else {
        const tempData = await ctx.model.Article.findOne({ where: { uid: uids }})
        recommendData.push({
          uid: tempData.uid,
          title: tempData.title
        })
      }
      ctx.body = {
        code: 200,
        data: recommendData,
        msg: '请求成功'
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        code: 201,
        msg: err
      }
    }
  }
}

module.exports = ArticleController

