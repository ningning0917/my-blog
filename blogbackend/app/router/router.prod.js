/**
 * @Description: 路由配置
 * @author wangke
 * @date 2019-11-04
 */
'use strict'
module.exports = app => {
  app.get('/study/githubLogin', app.controller.study.login.githubLogin)

  app.post('/study/login', app.controller.study.login.login)
  app.post('/study/info', app.controller.study.login.getInfo)
  app.post('/study/logout', app.controller.study.login.logout)
  app.post('/study/register', app.controller.study.login.register)
  app.post('/study/userList', app.controller.study.login.userList)

  // 文件上传
  app.post('/study/uploadFile', app.controller.study.uploadFile.index)
  // 第三方登录
  app.post('/study/github', app.controller.study.login.github)
  app.get('/home/index', app.controller.home.index)
  // 下载xlsx文件
  app.post('/download/xlsx', app.controller.study.downloadFile.index)
  app.post('/download/userInfo', app.controller.study.downloadFile.userInfo) // 下载用户信息
  app.post('/download/fileXls', app.controller.study.downloadFile.fileXls) // 下载模板
}
