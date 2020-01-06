module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize
  const ChatUser = app.model.define('chatUser', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nickname: {
      type: STRING(100),
      allowNull: false
    },
    cityName: {
      type: STRING(100),
      allowNull: false
    }
  })
  return ChatUser
}
