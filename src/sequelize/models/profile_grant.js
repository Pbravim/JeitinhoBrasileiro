'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile_grant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profile_grant.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'profile_grant',
  });
  return profile_grant;
};