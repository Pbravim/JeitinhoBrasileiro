'use strict';

const { DataTypes } = require('sequelize');

const STATUS = {
  em_andamento: '0',
  finalizado: '1',
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tarefas', {
      id: {
        type: Sequelize.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.DATE
      },
      data_fim: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM,
        values: Object.values(STATUS)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      projeto_id: {
        type: Sequelize.UUIDV4,
        references: {
          model: 'Projeto',
          key: 'id'
        },
        allowNull: false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tarefas');
  }
};