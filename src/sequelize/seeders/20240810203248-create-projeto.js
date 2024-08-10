'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projetos', [{
      id: '123e4567-e89b-12d3-a456-426614174000',
      Nome: 'Projeto Exemplo',
      Descricao: 'Este é um projeto de exemplo gerado por um seeder.',
      Orçamento: 100000,
      Data_de_Inicio: new Date(),
      Data_de_Fim: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      Status: 'andamento', // ou 'terminado'
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projetos', null, {});
  }
};
