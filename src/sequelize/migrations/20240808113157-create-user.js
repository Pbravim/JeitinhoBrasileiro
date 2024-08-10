'use strict';

const STATUS = {
  em_andamento: '0',
  finalizado: '1',
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,      
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM,
        values: Object.values(STATUS),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hashed_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    }).then(() => queryInterface.addIndex('users', ['profile_id']));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};