'use strict'
module.exports = {
  up: async(queryInterface, Sequelize) => {
    const { DataTypes, INTEGER } = Sequelize
    await queryInterface.createTable('chatUser', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nickname: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      cityName: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    })
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('chatUser')
  }
}
