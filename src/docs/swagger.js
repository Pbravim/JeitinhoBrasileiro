const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config()

const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Gerência de Projetos InovatecJP',
        version: '1.0.0',
        description: 'API Documentation',
      },
      servers: [
        {
          url:'http://localhost:3011/api-docs',
        },
      ],
    },
    apis: ['./src/docs/*.js']
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  
  const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  };
  
  module.exports = setupSwagger;