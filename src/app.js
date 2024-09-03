require('dotenv').config();
const express = require('express');
const cors = require('cors');
const setupSwagger = require('./docs/swagger')
const HttpError = require('./utils/customError/httpError');
const path = require('path');

const whiteList = ['*'];

const userRouter = require('./routes/userRouter')
const produtoRouter = require('./routes/produtoRouter');
const categoriaRouter = require('./routes/categoriaRouter');
const carrinhoRouter = require('./routes/carrinhoRouter');
const transacaoRouter = require('./routes/transacaoRouter')
const entregaRouter = require('./routes/entregaRouter')

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whiteList.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

const corsOptions = {
  origin: '*'
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    setupSwagger(this.app)
    this.errorHandling()
  }

  middlewares() {
    this.app.use(cors(corsOptions))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use('/public', express.static(path.join(__dirname, '../public')));
  }

  routes() {
    this.app.use('/user', userRouter)
    this.app.use('/produtos', produtoRouter)
    this.app.use('/categorias', categoriaRouter)
    this.app.use('/carrinho', carrinhoRouter);
    this.app.use('/transacoes', transacaoRouter);
    this.app.use('/entregas', entregaRouter);
  }

  errorHandling() {
    this.app.use((error, req, res, next) => {
      if (error instanceof HttpError) {
        res.status(error.status).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  }

  start(port) {
    this.app.listen(port, () => {
      console.log('Rodando na porta: ', port);
      console.log('Documentação: ', ' http://localhost:3011/api-docs');

    });
  }
}

module.exports = App;
