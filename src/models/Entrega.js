const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Entrega', {
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
};
