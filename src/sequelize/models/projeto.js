'use strict';
const {
  Model,
  UUIDV4
} = require('sequelize');

const STATUS = {
  em_andamento: '0',
  hiato: '1',
  finalizado: '2',
  cancelado: '3'
}

module.exports = (sequelize, DataTypes) => {
  class Projeto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projeto.init({
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    descricao: DataTypes.STRING,
    orcamento: DataTypes.NUMBER,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM,
      values: Object.values(STATUS)
    },
  }, {
    sequelize,
    modelName: 'Projeto',
  })

  Projeto.associate = models => {
    Projeto.hasMany(models.Tarefa, { foreignKey: 'projeto_id', as: 'projeto_id' });
    Projeto.hasMany(models.Projeto_Usuario, { foreignKey: 'projeto_id', as: 'projeto_id' });
  }

  return Projeto;
};