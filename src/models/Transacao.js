const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Transacao', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    carrinho_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    details: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Transacao',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Transacao_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
