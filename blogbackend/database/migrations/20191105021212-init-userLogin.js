'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize
    await queryInterface.createTable('userLogin', {
      loginString: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      uid: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      salt: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      status: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        defaultValue: '0'
      }
    })
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('userLogin')
  }
}
