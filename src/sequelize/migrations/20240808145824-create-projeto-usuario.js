'use strict';

const { DataTypes } = require('sequelize');

const STATUS = {
  em_andamento: '0',
  finalizado: '1',
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projeto_Usuarios', {
      id: {
        type: Sequelize.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      funcao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_fim: {
        type: Sequelize.DATE,
        allowNull: false

      },
      status: {
        type: Sequelize.STRING,
        values: Object.values(STATUS)
      },
      salario: {
        type: Sequelize.NUMBER
      },
      projeto_id: {
        type: Sequelize.UUIDV4,
        references: {
          model: 'Projeto',
          key: 'id'
        },
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUIDV4,
        references:{
          model: 'User',
          key: 'id'
        },
        allowNull: false
      },
      profile_id: {
        type: Sequelize.UUIDV4,
        references:{
          model: 'Profile',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projeto_Usuarios');
  }
};