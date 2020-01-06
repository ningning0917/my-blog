'use strict'

const { uniqueObjArr, makeRandomArr } = require('../extend/context')

const { toInt } = require('../extend/context')
const Controller = require('egg').Controller

class CommentController extends Controller {
  async createComment() {
    const ctx = this.ctx
    try {
      const { uid, nickname, email, website, comment } = ctx.request.body
      await ctx.model.Comment.create({ uid, nickname, email, website, comment })
      const article = await ctx.model.Article.findOne({ where: { uid }})
      article.update({
        comment: toInt(article.comment) + 1
      })
      const data = await ctx.model.Comment.findAll({
        where: { uid },
        order: [
          ['createTime', 'DESC']
        ]
      })
      const commenter = await ctx.model.Commenter.findOne({ where: { nickname }})
      if (!commenter) {
        await ctx.model.Commenter.create({ nickname, website, count: 1 })
      } else {
        commenter.update({
          count: commenter.count + 1
        })
      }
      console.log(commenter, 'commenter')
      ctx.body = {
        code: 200,
        data,
        msg: '创建成功'
      }
    } catch (err) {
      console.log(err, ctx.request.body)
      ctx.body = {
        code: 201,
        msg: err
      }
    }
  }
  async getComment() {
    const ctx = this.ctx
    try {
      const { uid } = ctx.request.body
      const data = await ctx.model.Comment.findAll({
        where: { uid },
        order: [
          ['createTime', 'DESC']
        ]
      })
      ctx.body = {
        code: 200,
        data,
        msg: '请求成功'
      }
    } catch (err) {
      console.log(err, ctx.request.body)
    }
  }
  async addCommentZan() {
    const ctx = this.ctx
    try {
      const { id, isZan } = ctx.request.body
      const comment = await ctx.model.Comment.findOne({ where: { id }})
      console.log(comment, isZan)
      comment.update({
        zan: isZan ? toInt(comment.zan) + 1 : toInt(comment.zan) - 1
      })
      ctx.body = {
        code: 200,
        zanCount: toInt(comment.zan),
        msg: '请求成功'
      }
    } catch (err) {
      console.log(err, ctx.request.body)
    }
  }
  async getNewArticle() {
    const ctx = this.ctx
    try {
      const Comment = await ctx.model.Comment.findAll({
        limit: 10,
        order: [
          ['createTime', 'DESC']
        ]
      })
      let data = []
      for (let i = 0; i < Comment.length; i++) {
        data[i] = await ctx.model.Article.findOne({ where: { uid: Comment[i].uid }})
        data[i].id = Comment[i].id
      }
      data = uniqueObjArr(data)
      data = makeRandomArr(data, 3)
      ctx.body = {
        code: 200,
        data,
        msg: '请求成功'
      }
    } catch (err) {
      console.log(err, ctx.request.body)
    }
  }
}

module.exports = CommentController

