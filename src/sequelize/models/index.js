'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'testSql';
const config = require('../../../config/config')[env];
const db = {};

let sequelize;
if (config && config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else if (config) {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
} else {
  throw new Error(`Configuração não encontrada para o ambiente: ${env}`);
}

const modelFiles = fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  });

for (const file of modelFiles) {
  const model = require(path.join(__dirname, file));
  if (typeof model !== 'function') {
    throw new Error(`O modelo importado de ${file} não está exportando uma função como default.`);
  }
  const initializedModel = model(sequelize, Sequelize.DataTypes);
  db[initializedModel.name] = initializedModel;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
