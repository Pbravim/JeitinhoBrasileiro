'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('profile_grant', {
        id: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.DataTypes.UUIDV1    
        },
        status: { type: Sequelize.DataTypes.STRING, allowNull: true },
        profile_id: {
          type: Sequelize.DataTypes.UUID,
          references: { model: 'profiles', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        grant_id: {
          type: Sequelize.DataTypes.UUID,
          references: { model: 'grants', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        updated_at:   { type: Sequelize.DataTypes.DATE, allowNull: false },
        created_at:   { type: Sequelize.DataTypes.DATE, allowNull: false }
      }, {underscored: true})
      .then(() => queryInterface.addIndex('profile_grant', ['profile_id']))
      .then(() => queryInterface.addIndex('profile_grant', ['grant_id']));
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('profile_grant');
  }
};