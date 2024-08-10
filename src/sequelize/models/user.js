'use strict';
const { Model, DataTypes } = require('sequelize');

const STATUS = {
  em_andamento: '0',
  finalizado: '1',
};

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true, // Mark id as the primary key
    },
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: Object.values(STATUS),
    },
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = models => {
    User.hasMany(models.Tarefa, { foreignKey: 'user_id', as: 'tarefas' });
    User.hasMany(models.Projeto_Usuario, { foreignKey: 'user_id', as: 'projetos' });
  };

  return User;
};
