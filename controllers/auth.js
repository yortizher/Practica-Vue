const {response} = require('express');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');
const usuario = [{
    nombre: 'Diego',
    correo: 'diego@gmail.com',
    password: '12345',
    estado:false
},
{
    nombre: 'Diego2',
    correo: 'diego2@gmail.com',
    password: '12345',
    estado:true
}]

const login = async(req,res = response) =>{
    
    const {correo,password} = req.body;

    try{

        //verificar si el usuario existe
        const user = await usuario.find( (cor) => cor.correo == correo);
     
        if(!user){
            return res.status(400).json({
                msg:'El usuario / password son incorrectos - correo'
            });
        }

        //verisifcar si el usuario esta ctivo
        if(!user.estado){
            return res.status(400).json({
                msg:'El usuario esta inactivo - estado:false'
            });
        }

        //Encriptamos contrasena
        const encrypt = async(textPlain) =>{
            const hash = await bcryptjs.hash(textPlain,10);
            return hash;
        }
        const paswwordHash = await encrypt(user.password);
    

        //Verificar contrasena
        const validPassword = bcryptjs.compareSync(password, paswwordHash);
      
        if(!validPassword){
            return res.status(400).json({
                msg:'El usuario / password son incorrectos - password'
            });
        }
        //Generar el JWT
       
        const token = await generarJWT(user.id);
        console.log(token);
        res.json({
            user,
            token
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"Hable con e administrador"
        })
    }
    
}

module.exports = {
    login
}