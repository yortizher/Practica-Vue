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

export const userById = async (req,res) => {
    const { id } = req.params
    try{
        const userId = await User.findOne({
            where: {
              id,
            },
          });
          res.json(userId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
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

export const deleteUsers = async (req,res) => {
    const { id } = req.params
    try{
         await User.destroy({
            where: {
                id
            }
        })
         res.status(204).json({message: `User with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}
export const editUsers = async (req,res) => {
    const { id } = req.params
    try {
        const { username, email, active } = req.body
    
        const editUser = await User.findByPk(id)
        editUser.username = username
        editUser.email = email
        editUser.active = active
        await editUser.save()
    
        res.json(editUser)
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}



