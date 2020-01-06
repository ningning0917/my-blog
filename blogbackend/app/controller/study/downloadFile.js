const Moment = require('moment')
const path = require('path')
const Controller = require('egg').Controller
const xlsx = require('xlsx')
const fs = require('fs')

class DownloadFileController extends Controller {
  async index(ctx) {
    // 这种是数据库具体的路径
    ctx.success({
      url: 'https://webrabbit.oss-cn-beijing.aliyuncs.com/u%3D986122996%2C3792478266%26fm%3D173%26app%3D25%26f%3DJPEG.jpeg'
    })
    //
    // const filePath = 'https://webrabbit.oss-cn-beijing.aliyuncs.com/%E7%90%86%E8%B5%94%E8%B0%83%E6%9F%A5-%E6%89%B9%E9%87%8F%E8%B0%83%E6%9F%A5%E6%A8%A1%E6%9D%BF%282%29.xlsx'
    // 获取数据
  }
  async fileXls(ctx) {
    const filePath = path.resolve('app/public/download', 'downloadFileXls.xlsx')
    this.ctx.attachment('app/public/download.xlsx')
    this.ctx.set('Content-Type', 'application/octet-stream')
    this.ctx.body = fs.createReadStream(filePath)
  }
  async userInfo(ctx) {
    const json = await this.app.model.query('select * from user', { type: 'SELECT' })
    const ss = xlsx.utils.json_to_sheet(json) // 通过工具将json转表对象
    const keys = Object.keys(ss).sort() // 排序 [需要注意，必须从A1开始]
    const ref = keys[1] + ':' + keys[keys.length - 1] // 这个是定义一个字符串 也就是表的范围[A1:C5]
    const workbook = { // 定义操作文档
      SheetNames: ['nodejs-sheetname'], // 定义表明
      Sheets: {
        'nodejs-sheetname': Object.assign({}, ss, { '!ref': ref }) // 表对象[注意表明]
      }
    }
    xlsx.writeFile(workbook, './app/public/download/用户信息表.xlsx')
    const filePath = path.resolve('app/public/download', '用户信息表.xlsx')
    this.ctx.attachment('用户信息表.xlsx')
    this.ctx.set('Content-Type', 'application/octet-stream')
    this.ctx.body = fs.createReadStream(filePath)
  }
}

module.exports = DownloadFileController
