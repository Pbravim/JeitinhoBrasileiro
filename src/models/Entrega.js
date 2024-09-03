const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Entrega = sequelize.define('Entrega', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    transacao_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Transacao',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    endereco: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Entrega',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Entrega_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  // Definição das Associações
  Entrega.associate = function(models) {
    Entrega.belongsTo(models.Transacao, { as: "transacao", foreignKey: "transacao_id" });
  };

  return Entrega;
};
