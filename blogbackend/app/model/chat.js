module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize
  const Chat = app.model.define('chat', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nickName: {
      type: STRING(100),
      allowNull: false
    },
    cityName: {
      type: STRING(100),
      allowNull: false
    },
    chatContent: {
      type: STRING(300),
      allowNull: false
    },
    createAt: {
      type: DATE,
      allowNull: true
    },
    updateAt: {
      type: DATE,
      allowNull: true
    }
  })
  return Chat
}
