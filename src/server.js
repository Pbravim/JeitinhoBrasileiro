require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models'); 
const App = require('./app')
const app = new App()

port = process.env.PORT

sequelize.sync({ alter: true }) // Use alter: true ou false conforme a necessidade
   .then(() => {
      console.log('Banco de dados sincronizado.');
      app.start(port)
   })


