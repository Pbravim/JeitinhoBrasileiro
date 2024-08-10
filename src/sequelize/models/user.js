'use strict';
const {
  Model
} = require('sequelize');

STATUS = {
  em_andamento: '0',
  finalizado: '1',
}

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
    id: DataTypes.UUIDV4,
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: Object.values(STATUS)
    },
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = models => {
    User.hasMany(models.Tarefa, { foreignKey: 'user_id', as: 'user_id' });
    User.hasMany(models.Projeto_Usuario, { foreignKey: 'user_id', as: 'user_id' });
  }

  return User;
};