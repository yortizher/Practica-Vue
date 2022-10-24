const express = require('express');
const jwt = require("jsonwebtoken");
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        //Con esto se pueden visiaulizar todas las rutas
        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth'
        //Middlewares
        this.middelwares();
        //rutas de la aplicacion
        this.routes();
    }

    middelwares(){
         //CORS 
         this.app.use(cors())
        //Directorio publico
        this.app.use(express.static('public'));
         //Lectura y Parseo del body
         this.app.use(express.json());


    }

    routes(){
        this.app.use( this.authPath, require('../routes/auth'))
        this.app.use( this.usuariosPath, require('../routes/user'))

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor correindo en  el puerto', this.port)
        });
    }
}

module.exports = Server;