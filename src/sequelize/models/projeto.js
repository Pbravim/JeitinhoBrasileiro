const {
  Model,
} = require('sequelize');
const STATUS = {
  em_andamento: '0',
  hiato: '1',
  finalizado: '2',
  cancelado: '3'
}
module.exports =  (sequelize, DataTypes) => {
  class Projeto extends Model {
    static associate(models) {
      Projeto.belongsToMany(models.User, {
        through: models.Projeto_Usuario,
        foreignKey: 'projeto_id',
        as: 'usuarios'
      });
      Projeto.hasMany(models.Projeto_Usuario, {
        foreignKey: 'projeto_id',
        as: 'projetosUsuario'
      });
    }
  }

  Projeto.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    descricao: DataTypes.STRING,
    orcamento: DataTypes.DECIMAL,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM,
      values: Object.values(STATUS)
    },
  }, {
    sequelize,
    modelName: 'Projeto',
  });

  return Projeto;
};
