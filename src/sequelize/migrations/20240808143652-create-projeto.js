'use strict';

const STATUS = {
  em_andamento: '0',
  hiato: '1',
  finalizado: '2',
  cancelado: '3'
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projetos', {
      id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      orcamento: {
        type: Sequelize.NUMBER
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
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projetos');
  }
};