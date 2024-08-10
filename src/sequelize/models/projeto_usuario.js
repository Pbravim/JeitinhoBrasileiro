'use strict';
const {
  Model,
} = require('sequelize');

const STATUS = {
  em_andamento: '0',
  finalizado: '1',
}

module.exports = (sequelize, DataTypes) => {
  class Projeto_Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projeto_Usuario.init({
    funcao: DataTypes.STRING,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    status:{
      type: DataTypes.STRING,
      values: Object.values(STATUS)
    },
    salario: DataTypes.NUMBER,
    projeto_id: {
      type: DataTypes.UUIDV4,
      references: {
        model: 'Projeto',
        key: 'id'
      },
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUIDV4,
      references:{
        model: 'User',
        key: 'id'
      },
      allowNull: false,
      primaryKey: true

    },
    profile_id: {
      type: DataTypes.UUIDV4,
      references:{
        model: 'Profile',
        key: 'id'
      },
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Projeto_Usuario',
  });


  Projeto_Usuario.associate = models => {
    Projeto_Usuario.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    Projeto_Usuario.belongsTo(models.Project, { foreignKey: 'projeto_id', as: 'projeto' });
    Projeto_Usuario.belongsTo(models.Profile, { foreignKey: 'profile_id', as: 'profile' });
  }

return Projeto_Usuario;
};