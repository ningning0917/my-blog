/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * 验证是否是身份证号码
 * @returns {arg is Array<any>|boolean}
 * @param rule
 * @param value
 * @param callback
 */
export function validIdentityNumber(rule, value, callback) {
  const reg = /^[A-Za-z0-9]+$/
  if (!value) {
    callback(new Error('请输入身份证号码'))
  }
  if (!reg.test(value)) {
    callback(new Error('请输入正确的身份证号码'))
  } else {
    callback()
  }
}

/**
 * 验证6-20位数字或字母
 * @returns {boolean}
 * @param rule
 * @param value
 * @param callback
 */
export function validUserCode(rule, value, callback) {
  const reg = /^[A-Za-z0-9]{6,20}$/
  if (!value) {
    callback('请输入6-20位数字或字母组合')
    return false
  }
  if (reg.test(value)) {
    callback()
  } else {
    callback('请输入6-20位数字或字母组合')
  }
}

export function validPassword(rule, value, callback) {
  var rC = {
    lW: '[a-z]',
    uW: '[A-Z]',
    nW: '[0-9]',
    sW: '[\\u0020-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E]'
  }

  /**
   * @return {boolean}
   */
  function Reg(str, rStr) {
    var reg = new RegExp(rStr)
    return reg.test(str)
  }
  if (!value) {
    callback('请输入密码')
    return false
  }
  if (value.length < 6) {
    callback('您的密码长度太短')
    return false
  } else {
    var tR = {
      l: Reg(value, rC.lW),
      u: Reg(value, rC.uW),
      n: Reg(value, rC.nW),
      s: Reg(value, rC.sW)
    }
    if ((tR.l && tR.u && tR.n) || (tR.l && tR.u && tR.s) || (tR.s && tR.u && tR.n) || (tR.s && tR.l && tR.n)) {
      callback()
    } else {
      callback('由大于6位字母、数字及其特殊字符组成')
      return false
    }
  }
}

// form验证手机号码
export function VALIDATEMOBILE(rule, value, callback) {
  if (!value || !ISPHONENUMBER(value)) {
    if (value === '' || typeof value === 'undefined') {
      callback(new Error('请填写手机号'))
    } else {
      callback(new Error('输入的手机号码格式有误'))
    }
  } else {
    callback()
  }
}

/**
 * 验证手机号正则
 * 返回验证结果
 */
export function ISPHONENUMBER(val) {
  const reg = /^1[0-9]{10}$/
  if (val) {
    return reg.test(val)
  } else {
    return false
  }
}

/**
 * 验证邮箱
 * @param rule
 * @param value
 * @param callback
 * @constructor
 */

export function VALIDATEMEAIL(rule, value, callback) {
  const reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$') // 正则表达式
  if (value === '') { // 输入不能为空
    callback(new Error('请填写邮箱'))
  } else if (!reg.test(value)) { // 正则验证不通过，格式不对
    callback(new Error('请填写正确邮箱'))
  } else {
    callback()
  }
}
