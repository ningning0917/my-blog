'use strict'

const path = require('path')
const Controller = require('egg').Controller
const fs = require('mz/fs')

// const client = new OSS({})
// 文件操作工具
const fsToll = require('fs-extra')
// 文件目录处理
// const send = require("koa-send");
// const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole')
const dayjs = require('dayjs')

class UploadFileController extends Controller {
  async index(ctx) {
    const dirName = dayjs(Date.now()).format('YYYYMMDD')// 生成日期数据

    await fsToll.ensureDir(path.join(this.config.baseDir, 'app/public/upload/' + dirName)) // 生成文件夹 ，如果存在则不生成

    // 获取用户上传文件

    const stream = await ctx.getFileStream()

    const extname = path.extname(stream.filename).toLowerCase()// 文件扩展名称

    const fileName = Date.now() + '' + Number.parseInt(Math.random() * 10000) + extname// 文件名

    const target = path.join(this.config.baseDir, 'app/public/upload/', dirName, fileName) // 文件存放目录位置

    const writeStream = fs.createWriteStream(target) // 存储文件 创造可写流

    const streamPipe = stream.pipe(writeStream) // 文件存储等待机制 将可读性流写入可写流

    let result = null

    try {
      result = await ctx.oss.put(fileName, target)
    } finally {
      await fs.unlink(target)
    }
    if (result) {
      ctx.body = {
        code: 200,
        imgUrl: result.url,
        msg: '图片上传成功'
      }
    } else {
      ctx.body = 'please select a file to upload！'
    }
  }
  /**
   * 单张图片删除
   */

  async destroy() {
    const { ctx } = this
    const imgName = ctx.params.id
    try {
      const result = await client.delete(imgName)
      ctx.success({ ctx, code: 200 })
    } catch (e) {
      throw e
    }
  }
}

module.exports = UploadFileController
