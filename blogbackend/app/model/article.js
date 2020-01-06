/**
 * article Model
 * @param app
 * @return {*}
 */
module.exports = app => {
  const { STRING, DATE, Sequelize, CHAR, TEXT } = app.Sequelize

  const Article = app.model.define('article', {
    uid: {
      type: STRING(255),
      allowNull: false,
      primaryKey: true
      // foreignKey: true
    },
    title: {
      type: STRING(255),
      allowNull: false
    },
    author: {
      type: STRING(30),
      allowNull: false
    },
    publishTime: {
      type: DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    modifyTime: {
      type: DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    importance: {
      type: CHAR(1),
      allowNull: true
    },
    summary: {
      type: STRING(100),
      allowNull: true
    },
    see: {
      type: STRING(10),
      allowNull: true,
      defaultValue: '0'
    },
    comment: {
      type: STRING(100),
      allowNull: true,
      defaultValue: '0'
    },
    zan: {
      type: STRING(10),
      allowNull: true,
      defaultValue: '0'
    },
    label: {
      type: STRING(100),
      allowNull: true
    },
    imageUrl: {
      type: STRING(255),
      allowNull: true
    },
    recommend: {
      type: CHAR(1),
      allowNull: true,
      defaultValue: '0'
    },
    content: {
      type: STRING(20000),
      allowNull: true
    }
  })

  // Article.associate = function() {
  //   app.model.Article.hasOne(app.model.Label, { foreignKey: 'uid' })
  // }

  return Article
}
