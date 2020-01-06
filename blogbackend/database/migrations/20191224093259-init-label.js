'use strict'
module.exports = {
  up: async(queryInterface, Sequelize) => {
    const { DataTypes, INTEGER } = Sequelize
    await queryInterface.createTable('label', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: 0
      },
      uid: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      labelName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      }
    })
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('label')
  }
}
