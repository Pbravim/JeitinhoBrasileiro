'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('grants', {
        id: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.DataTypes.UUIDV1    
        },
        grant: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
        },
        validate:       { 
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
        note:            { type: Sequelize.DataTypes.TEXT, allowNull: true },
        filterable_route:{ type: Sequelize.DataTypes.STRING, allowNull: true, defaultValue: 'company' },
        route:           { type: Sequelize.DataTypes.STRING, allowNull: false },
        updated_at:      { type: Sequelize.DataTypes.DATE, allowNull: false },
        created_at:      { type: Sequelize.DataTypes.DATE, allowNull: false }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('grants');
  }
};