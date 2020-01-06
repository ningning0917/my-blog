'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize
    await queryInterface.createTable('userLogin_L', {
      logID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uid: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      loginString: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      loginLogType: {
        type: DataTypes.CHAR(1),
        allowNull: true
      },
      logDESC: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      createTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('userLogin_L')
  }
}
