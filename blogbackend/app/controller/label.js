'use strict'
const Controller = require('egg').Controller

class LabelController extends Controller {
  async addLabel() {
    const ctx = this.ctx
    try {
      const { labelName } = ctx.request.body
      console.log(labelName, 'labelName')
      await ctx.model.Label.create({ labelName })
      const data = await ctx.model.Label.findAll()
      ctx.body = {
        code: 200,
        data,
        msg: '创建成功'
      }
    } catch (err) {
      if (err.original.errno === 1062) {
        ctx.body = {
          code: 201,
          msg: '标签重复'
        }
      }
      console.log(err, ctx.request.body)
    }
  }
  async labelList() {
    const ctx = this.ctx
    try {
      const data = await ctx.model.Label.findAll()
      ctx.body = {
        code: 200,
        data,
        msg: '请求成功'
      }
    } catch (err) {
      console.log(err, ctx.request.body)
    }
  }
  async getLabelArticle() {
    const ctx = this.ctx
    const { label } = ctx.request.body
    try {
      const Labels = await ctx.model.Label.findOne({ where: { labelName: label }})
      const articles = []
      if (Labels.uid.indexOf(',') === -1) {
        const uid = Labels.uid
        articles.push(await ctx.model.Article.findOne({ where: { uid }}))
      } else {
        const uid = Labels.uid.split(',')
        for (let i = 0; i < uid.length; i++) {
          articles.push(await ctx.model.Article.findOne({ where: { uid: uid[i] }}))
        }
      }
      ctx.body = {
        code: 200,
        data: articles,
        total: 1,
        msg: '请求成功'
      }
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = LabelController

