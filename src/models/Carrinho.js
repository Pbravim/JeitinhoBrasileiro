const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Carrinho = sequelize.define('Carrinho', {
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
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'aberto'
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

  // Definição das Associações
  Carrinho.associate = function(models) {
    Carrinho.hasMany(models.Carrinho_Itens, { as: "itens", foreignKey: "carrinho_id" });
  };

  return Carrinho;
};
