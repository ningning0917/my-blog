'use strict'
module.exports = {
  up: async(queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize
    await queryInterface.createTable('article', {
      uid: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
        defaultValue: ''
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      author: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      publishTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      modifyTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      importance: {
        type: DataTypes.CHAR(1),
        allowNull: true
      },
      summary: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      see: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: '0'
      },
      comment: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: '0'
      },
      zan: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: '0'
      },
      label: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      imageUrl: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      recommend: {
        type: DataTypes.CHAR(1),
        allowNull: true,
        defaultValue: '0'
      },
      content: {
        type: DataTypes.STRING(10000),
        allowNull: true
      }
    })
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('article')
  }
}
