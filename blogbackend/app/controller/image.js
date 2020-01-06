'use strict'
const { toInt } = require('../extend/context')

const Controller = require('egg').Controller

class ImagesController extends Controller {
  async getImages() {
    const ctx = this.ctx
    const { page, limit } = ctx.request.body
    console.log(page, limit, '123')
    try {
      let total = await this.app.model.query('select COUNT(*) from images', { type: 'SELECT' })
      total = total[0]['COUNT(*)']

      const data = await ctx.model.Image.findAll({
        offset: (page - 1) * limit, // 数据偏移量
        limit
      })
      console.log(data, total, 'data')
      ctx.body = {
        code: 200,
        data,
        total: toInt(total),
        msg: '请求成功'
      }
    } catch (err) {
      ctx.body = {
        code: 200,
        data: err
      }
    }
  }
}

module.exports = ImagesController

