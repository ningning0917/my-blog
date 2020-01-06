/**
 * comment Model
 * @param app
 * @return {*}
 */
module.exports = app => {
  const { STRING, DATE, Sequelize, INTEGER } = app.Sequelize

  const Comment = app.model.define('comment', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    nickname: {
      type: STRING(100),
      allowNull: false
    },
    email: {
      type: STRING(255),
      allowNull: true
    },
    website: {
      type: STRING(255),
      allowNull: true
    },
    comment: {
      type: STRING(700),
      allowNull: false
    },
    createTime: {
      type: DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    zan: {
      type: STRING(10),
      allowNull: true
    }
  })

  return Comment
}
