'use strict'
module.exports = {
  up: async(queryInterface, Sequelize) => {
    const { DataTypes, INTEGER } = Sequelize
    await queryInterface.createTable('chat', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nickName: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      cityName: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      chatContent: {
        type: DataTypes.STRING(300),
        allowNull: false
      },
      createAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updateAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('chat')
  }
}
