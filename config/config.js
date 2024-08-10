
require('dotenv').config()
const path = require('path');

module.exports = {
  NODE_ENV:'testSql',
  development: {
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE_TEST || 'database_test',
    host: process.env.DB_HOST || '',
    dialect: 'sqlite',
    storage: 'sequelize.sqlite' 
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_TEST,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_PRODUCTION,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  testSql: {
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE_TEST || 'database_test',
    host: process.env.DB_HOST || '',
    dialect: 'sqlite',
    storage: 'sequelize.sqlite'  // Necessário para SQLite
  },
}
