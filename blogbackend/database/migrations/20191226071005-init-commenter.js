'use strict'
module.exports = {
  up: async(queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize
    await queryInterface.createTable('commenter', {
      commenterId: {
        type: DataTypes.INTEGER(255),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nickname: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      website: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      createTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      count: {
        type: DataTypes.INTEGER(255),
        allowNull: true
      }
    })
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('commenter')
  }
}
