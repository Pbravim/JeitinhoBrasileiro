const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Carrinho_Itens = sequelize.define('Carrinho_Itens', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    carrinho_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Carrinho',
        key: 'id'
      }
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Produtos',
        key: 'id'
      }
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    preco_total_itens: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Carrinho_Itens',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Carrinho_Itens_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  // Definição das Associações
  Carrinho_Itens.associate = function(models) {
    Carrinho_Itens.belongsTo(models.Carrinho, { as: "carrinho", foreignKey: "carrinho_id" });
    Carrinho_Itens.belongsTo(models.Produtos, { as: "produto", foreignKey: "produto_id" });
  };

  return Carrinho_Itens;
};
