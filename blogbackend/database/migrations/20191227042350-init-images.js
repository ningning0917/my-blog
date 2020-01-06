'use strict'
module.exports = {
  up: async(queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize
    await queryInterface.createTable('label', {
      id: {
        type: DataTypes.STRING(255),
        allowNull: true,
        primaryKey: true
      },
      url: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    })
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('label')
  }
}
