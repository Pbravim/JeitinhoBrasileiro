const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProfileGrants', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Profiles',
        key: 'id'
      }
    },
    grant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Grants',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ProfileGrants',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ProfileGrants_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
