/**
 * comment Model
 * @param app
 * @return {*}
 */
module.exports = app => {
  const { STRING, DATE, Sequelize, INTEGER } = app.Sequelize

  const Commenter = app.model.define('commenter', {
    commenterId: {
      type: INTEGER(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nickname: {
      type: STRING(100),
      allowNull: false
    },
    website: {
      type: STRING(255),
      allowNull: true
    },
    createTime: {
      type: DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    count: {
      type: INTEGER(255),
      allowNull: true
    }
  })

  return Commenter
}
