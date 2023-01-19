const express = require('express')
const cors = require('cors')

class Server{
 
    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        this.middlewares();
        this.usuariosPath = '/api/usuarios'

        this.routes();
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static('public'))
    }

    routes(){
       this.app.use(this.usuariosPath,require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }

}


module.exports = Server