module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize
  const Label = app.model.define('label', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      type: STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    labelName: {
      type: STRING(100),
      allowNull: false,
      unique: true
    }
  })
  return Label
}
