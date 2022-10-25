import { Router } from 'express'
import { 
    rootRoute,
    userById,
    users,
    createUsers,
    deleteUsers,
    editUsers
 } from '../controllers/controller.js'

export const appRouter = Router()


appRouter.get('/', rootRoute )
appRouter.get('/users', users)
appRouter.get('/users/:id', userById)
appRouter.post('/users', createUsers)
appRouter.put('/users/:id', editUsers)
appRouter.delete('/users/:id',deleteUsers )