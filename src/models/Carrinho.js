const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Carrinho', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Carrinho',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Carrinho_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
