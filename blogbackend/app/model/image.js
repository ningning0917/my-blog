/**
 * comment Model
 * @param app
 * @return {*}
 */
module.exports = app => {
  const { STRING } = app.Sequelize

  const Image = app.model.define('images', {
    id: {
      type: STRING(255),
      allowNull: true,
      primaryKey: true
    },
    url: {
      type: STRING(255),
      allowNull: false
    },
    title: {
      type: STRING(255),
      allowNull: false
    }
  })
  return Image
}
