'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  endereco.init({
    id: DataTypes.UUIDV4
  }, {
    sequelize,
    modelName: 'endereco',
  });

  endereco.associate = models => {
    endereco.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
  return endereco;
};