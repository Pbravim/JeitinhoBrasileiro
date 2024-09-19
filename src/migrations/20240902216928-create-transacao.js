'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transacao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      payment_method: {
        type: Sequelize.STRING, // ou Sequelize.ENUM, se quiser restringir os métodos de pagamento
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING, // ou Sequelize.ENUM, se quiser restringir os status possíveis
        allowNull: false,
      },
      carrinho_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Carrinho',
          key: 'id',
        },
      },
      details: {
        type: Sequelize.STRING,
        allowNull: true,
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transacao');
  }
};
