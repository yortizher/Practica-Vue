import { v4 } from 'uuid'
import { User } from '../models/user.js'


export const rootRoute = (req,res) => {
    res.json({message: "Welcome to API with Sequelize"})
}

export const users = async (req,res) => {
    try{
        const usersList = await User.findAll()
        res.json(usersList)
    }catch(err){
        console.error(err)
    }
}

export const createUsers = async  (req,res) => {
    const { username,email,active } = req.body
    try{
    if( !username || !email ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createUser = await User.create({
        id: v4(),
        username,
        email,
        active
    })
    res.json(createUser)

    }catch(err){
        console.error(err)
    }
}

export const usersId = (req,res) => {
    const { id } = req.params
    res.json({
        id: v4(),
        nombre: `User N° ${id}`
    })
}