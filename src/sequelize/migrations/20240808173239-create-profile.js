'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('profiles', {
        id: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.DataTypes.UUIDV1    
        },
        name: {
          type: Sequelize.DataTypes.STRING, allowNull: false
        },
        description:  { type: Sequelize.DataTypes.TEXT, allowNull: false, unique: true },
        is_admin:     { type: Sequelize.DataTypes.BOOLEAN, allowNull: false, default: false },
        updated_at:   { type: Sequelize.DataTypes.DATE, allowNull: false },
        created_at:   { type: Sequelize.DataTypes.DATE, allowNull: false }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('profiles');
  }
};