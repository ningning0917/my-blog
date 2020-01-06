'use strict'
exports.sequelize = {
  // 单数据库信息配置
  enable: true,
  dialect: 'mysql',
  // host
  host: '127.0.0.1',
  // 端口号
  port: '3306',
  username: 'root',
  // 密码
  password: 'wangke123',
  // 数据库名
  database: 'egg_study',
  // dialectOptions: {
  //   dateStrings: true,
  //   typeCast: true,
  //   socketPath: '/tmp/mysql.sock' // 指定套接字文件路径
  // },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false, // true by default
    freezeTableName: true
  },
  timezone: '+08:00' // 东八时区
}
exports.security = {
  domainWhiteList: ['http://localhost:8257'],
  csrf: {
    ignore: /\/admin/
  }
}

exports.oss = {
  client: {
    accessKeyId: 'LTAI4Fp4JaHT7mdvPrUTngAt',
    accessKeySecret: 'iHYLvoyA1SO1GUZEzxvHx5qcwwUxxw',
    bucket: 'webrabbit',
    endpoint: 'https://oss-cn-beijing.aliyuncs.com',
    timeout: '60s',
    uploadHost: 'https://webrabbit.oss-cn-beijing.aliyuncs.com'
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: true
}

