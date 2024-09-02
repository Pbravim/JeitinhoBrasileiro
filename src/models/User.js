const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email:{
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hashed_senha: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'User',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "User_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
