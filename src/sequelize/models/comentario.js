'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comentario.init({
    texto: DataTypes.STRING,
    tarefa_usuario_id: {
      type: DataTypes.UUIDV4,
      references: {
        model: 'Tarefa_Usuario',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'comentario',
  });
  return comentario;
};