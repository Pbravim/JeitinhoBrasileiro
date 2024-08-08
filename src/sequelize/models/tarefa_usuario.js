'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefa_Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tarefa_Usuario.init({
    user_id: {
      type: DataTypes.UUIDV4,
      references: {}
    },
    tarefa_id: DataTypes.UUIDV4
  }, {
    sequelize,
    modelName: 'Tarefa_Usuario',
  });
  return Tarefa_Usuario;
};