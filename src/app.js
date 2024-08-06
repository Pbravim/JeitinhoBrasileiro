const express = require('express')
const cors = require('cors')

const whiteList = ['*']

const corsOptions = {
    origin: function (origin, callback) {
      if (whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };

class App {
    constructor(){
        this.app = express()
        // this.middlewares()
        // this.routes()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json)
        this.app.use(express.urlencoded)
    }

    routes(){

    }

    start(port){
        this.app.listen(port, ()=>{
            console.log('Rodando na porta: ', port)
            console.log('Documentação: ', process.env.URL_API + '/api-docs')
        })
    }
}

export default new App().app