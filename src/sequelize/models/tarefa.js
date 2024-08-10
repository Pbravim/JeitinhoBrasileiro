'use strict';
const {
  Model,
} = require('sequelize');
const STATUS = {
  em_andamento: '0',
  finalizado: '1',
}

module.exports =  (sequelize, DataTypes) => {
  class Tarefa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tarefa.init({
    descricao: DataTypes.STRING,
    title: DataTypes.STRING,
    data_inicio: DataTypes.DATE,
    prazo: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM,
      values: Object.values(STATUS)
    },
    projeto_id:{
      type: DataTypes.UUIDV4,
      references: {
        model: 'Projeto',
        key: 'id'
      }
    },
    responsavel_id: {
      type: DataTypes.UUIDV4,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Tarefa',
  });

Tarefa.associate = models => {
  Tarefa.belongsTo(models.Projeto, { foreignKey: 'projeto_id', as: 'projeto' });
  Tarefa.belongsToMany(models.User, { through: models.Tarefa_Usuario, as: 'usuarios', foreignKey: 'tarefa_id' });
}
  
  return Tarefa;
};