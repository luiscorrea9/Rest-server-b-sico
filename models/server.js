const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{
 
    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        this.middlewares();
        this.usuariosPath = '/api/usuarios';

        //Conectar a la base de datos
        this.conectarDC();

        this.routes();
    }

    async conectarDC(){
        await dbConnection()
    }


    middlewares(){
        this.app.use(cors())

        //Leer el post
        this.app.use(express.json());

        this.app.use(express.static('public'))
    }

    routes(){
       this.app.use(this.usuariosPath,require('../routes/userRoutes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }

}


module.exports = Server