'use strict'
module.exports = {
  up: async(queryInterface, Sequelize) => {
    const { DataTypes, INTEGER } = Sequelize
    await queryInterface.createTable('comment', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      uid: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      nickname: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      website: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      comment: {
        type: DataTypes.STRING(700),
        allowNull: false
      },
      createTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      zan: {
        type: DataTypes.STRING(10),
        allowNull: true
      }
    })
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('comment')
  }
}
