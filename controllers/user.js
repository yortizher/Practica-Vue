const {response} = require('express');

const userGet =  (req = request, res = response)=> {
    const {q,nombre='No name',apiKey,page=1,limit} = req.query;
    res.json({
        msg: 'Get Api - controlador',
        q,
        nombre,
        apiKey,
        page,
        limit
    })
  }

const userPut = (req, res)=> {
    const{id} = req.params;
    res.json({
        msg: 'Put Api - controlador',
        id
    })
    }

const userPost = (req, res)=> {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'Post Api - controlador',
        nombre,
        edad
    })
    }


const userPatch = (req, res)=> {
    res.json({
        msg: 'PAtchApi - controlador'
    })
    }

const userDelete =  (req, res)=> {
    res.json({
        msg: 'Delete Api - controlador'
    })
    }


module.exports = {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelete
  }