const {
  Model,
} = require('sequelize');
const STATUS = {
  em_andamento: '0',
  finalizado: '1',
};

module.exports =  (sequelize, DataTypes) => {
  class Projeto_Usuario extends Model {
    static associate(models) {
      Projeto_Usuario.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'usuario'
      });
      Projeto_Usuario.belongsTo(models.Projeto, {
        foreignKey: 'projeto_id',
        as: 'projeto'
      });
      Projeto_Usuario.belongsTo(models.Profile, {
        foreignKey: 'profile_id',
        as: 'profile'
      });
    }
  }

  Projeto_Usuario.init({
    funcao: DataTypes.STRING,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM,
      values: Object.values(STATUS),
    },
    salario: DataTypes.DECIMAL,
    projeto_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Projetos',
        key: 'id',
      },
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: false,
      primaryKey: true,
    },
    profile_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Profiles',
        key: 'id',
      },
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Projeto_Usuario',
  });

  return Projeto_Usuario;
};
