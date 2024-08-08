'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rua:{
        type: Sequelize.STRING,
      },
      cep:{
        type: Sequelize.STRING,
      },
      logradouro:{
        type: Sequelize.STRING,
      },
      bairro:{
        type: Sequelize.STRING,
      },
      uf:{
        type: Sequelize.STRING,
      },
      ddd:{
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endereco_id: {
        type: Sequelize.UUIDV4,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('enderecos');
  }
};