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
  password: 'root',
  // 数据库名
  database: 'egg_study',
  define: { // model的全局配置
    timestamps: false, // 添加create,update,delete时间戳
    paranoid: true, // 添加软删除
    freezeTableName: true, // 防止修改表名为复数
    underscored: false // 防止驼峰式字段被默认转为下划线
  },
  dialectOptions: { // 让读取date类型数据时返回字符串而不是UTC时间
    dateStrings: true,
    typeCast(field, next) {
      if (field.type === 'DATETIME') {
        return field.string()
      }
      return next()
    }
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  timezone: '+08:00' // 东八时区
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

