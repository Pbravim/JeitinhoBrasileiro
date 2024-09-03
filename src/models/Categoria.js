const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Categoria', {
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
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Categoria',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Categoria_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
