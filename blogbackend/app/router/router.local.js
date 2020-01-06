/**
 * @Description: 路由配置
 * @author wangke
 * @date 2019-11-04
 */
'use strict'

module.exports = app => {
  const wechat = app.middlewares.wechat({
    token: 'webrabbit',
    appid: 'wxa2508b52448eb2fa',
    encodingAESKey: '6AAmZYQMHE1hBU2r80UPqjswS81OvU1lhBZB8MrwyoY'
  })
  const isLoginChatUser = app.middlewares.isLoginChatUser()

  app.get('/study/githubLogin', app.controller.study.login.githubLogin)

  app.post('/study/login', app.controller.study.login.login)
  app.post('/study/info', app.controller.study.login.getInfo)
  app.post('/study/logout', app.controller.study.login.logout)
  app.post('/study/register', app.controller.study.login.register)
  app.post('/study/userList', app.controller.study.login.userList)
  // 第三方登录
  app.post('/study/github', app.controller.study.login.github)
  app.get('/home/index', app.controller.home.index)
  // 下载xlsx文件
  app.post('/download/xlsx', app.controller.study.downloadFile.index)
  app.post('/download/userInfo', app.controller.study.downloadFile.userInfo) // 下载用户信息
  app.post('/download/fileXls', app.controller.study.downloadFile.fileXls) // 下载模板

  // 文件上传
  app.post('/uploadFile', app.controller.study.uploadFile.index)
  // 文章
  app.post('/article/create', app.controller.article.create) // 创建文章
  app.post('/article/update', app.controller.article.update) // 编辑文章
  app.post('/article/list', app.controller.article.list) // 获取文章列表
  app.post('/article/detail', app.controller.article.detail) // 获取文章列表
  app.post('/article/addSee', app.controller.article.addSee) // 增加浏览量
  app.post('/article/addZan', app.controller.article.addZan) // 增加点赞量
  app.post('/article/createComment', app.controller.comment.createComment) // 创建评论
  app.post('/article/getComment', app.controller.comment.getComment) // 请求评论
  app.post('/article/addCommentZan', app.controller.comment.addCommentZan) // 评论点赞
  app.post('/article/getNewArticle', app.controller.comment.getNewArticle) // 评论点赞
  app.get('/article/getTotal', app.controller.article.getTotal) // 获得总数
  app.get('/article/recommend', app.controller.article.recommend) // 推荐文章
  app.post('/article/getRecommend', app.controller.article.getRecommend) // 相关文章推荐
  app.post('/reader/readerList', app.controller.reader.readerList) // 读者列表

  // 标签管理
  app.post('/label/addLabel', app.controller.label.addLabel) // 创建标签
  app.post('/label/labelList', app.controller.label.labelList) // 获得标签
  app.post('/label/getLabelArticle', app.controller.label.getLabelArticle) // 获得标签

  // 图片获取
  app.post('/image/getImages', app.controller.image.getImages) // 图片获取

  // 发送mail
  app.post('/mail/sendMail', app.controller.mail.sendMail)
  app.post('/mail/captcha', app.controller.mail.captcha)

  // 微信
  app.get('/wechat', wechat)
  app.post('/wechat', wechat)

  app.get('/weChatOAuth', app.controller.weChatOAuth.getOAuth)
  app.get('/getFollowers', app.controller.weChatOAuth.getFollowers)
  app.get('/getInfo', app.controller.weChatOAuth.getInfo)

  // socket.io
  // app.io.route('chat', app.io.controller.chat.index)

  // app.post('/', app.controller.webscoket.index)
  app.get('/chatList', app.controller.webscoket.chatList)
  app.io.of('/').route('chat', app.io.controller.chat.index)
  // login
  app.post('/chatLogin', app.controller.webscoket.chatLogin)
  app.get('/userList', isLoginChatUser, app.controller.webscoket.userList) // 用户列表
}
