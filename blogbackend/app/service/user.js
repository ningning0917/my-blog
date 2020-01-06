'use strict'

module.exports = app => {
  class User extends app.Service {
    async say() {
      return '今天是2020年的第一天222'
    }
  }
  return User
}
