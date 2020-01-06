/**
 *
 * @type {{foo(*)}}
 */
const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken') // 引入jsonwebtoken

module.exports = {
// 解密，验证
  verifyToken(token) {
    const cert = fs.readFileSync(path.join(__dirname, '../public/rsa_public_key.pem')) // 公钥，看后面生成方法
    let res = ''
    try {
      const result = jwt.verify(token, cert, { algorithms: ['RS256'] }) || {}
      const { exp } = result
      const current = Math.floor(Date.now() / 1000)
      if (current <= exp) res = result.data || {}
    } catch (e) {
      console.log(e)
    }
    return res
  },
  toInt(str) {
    if (typeof str === 'number') return str
    if (!str) return str
    return parseInt(str, 10) || 0
  },
  isMobile() {
    const deviceAgent = this.get('user-agent').toLowerCase()
    const agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/)
    if (agentID) {
      // 手机访问
      return true
    }
    // 电脑访问
    return false
  },
  success(data, msg = '请求成功') {
    this.body = {
      code: 200,
      data,
      msg
    }
  },
  failure(msg = '失败') {
    this.body = {
      code: 201,
      msg
    }
  },
  async infoPage(msg) {
    await this.render('500', { msg })
  },
  async getUserInfo() {
    const info = { uid: this.session.uid, username: this.session.username, nickname: this.session.nickname, isLogin: this.session.isLogin }
    const res = await this.model.ShopCart.findAndCountAll({
      where: { uid: info.uid }
    })
    info.cartCount = res.count
    info.cart = res.rows
    return info
  },
  uniqueObjArr(arr) {
    const result = []
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
      if (!obj[arr[i].uid]) {
        result.push(arr[i])
        obj[arr[i].uid] = true
      }
    }
    return result
  },
  formatTime(nowTime) {
    let thisTime = nowTime
    thisTime = thisTime.replace(/-/g, '/')
    let time = new Date(thisTime)
    time = time.getTime()
    return time
  },
  parseTime(time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      }
      if ((typeof time === 'number') && (time.toString().length === 10)) {
        time = time * 1000
      }
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return time_str
  },
  uniqueArr(arr) {
    return Array.from(new Set(arr))
  },
  // 随机从数组中取3个值
  makeRandomArr(arrList, num) {
    if (num > arrList.length) {
      return
    }
    //    var tempArr=arrList.concat();
    const tempArr = arrList.slice(0)
    const newArrList = []
    for (let i = 0; i < num; i++) {
      const random = Math.floor(Math.random() * (tempArr.length - 1))
      const arr = tempArr[random]
      tempArr.splice(random, 1)
      newArrList.push(arr)
    }
    return newArrList
  }

}
