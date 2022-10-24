import { uuid } from '../helpers/helper.js'
import { User } from '../models/user.js'


export const rootRoute = (req,res) => {
    res.json({message: "Welcome to API with Sequelize"})
}
export const users = async (req,res) => {
    const usersList = await User.findAll()
    res.json(usersList)
}

export const createUsers = async  (req,res) => {
    const { username,email,active } = req.body
    if( !username || !email ||  active === 'undefined'){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createUser = await User.create({
        id_user: uuid,
        username,
        email,
        active
    })
    res.json(createUser)
}

export const usersId = (req,res) => {
    const { id } = req.params
    res.json({
        id_user: uuid,
        nombre: `User N° ${id}`
    })
}