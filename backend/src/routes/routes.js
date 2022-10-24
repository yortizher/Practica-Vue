import { Router } from 'express'
import { 
    rootRoute,
    usersId,
    users,
    createUsers
 } from '../controllers/controller.js'

export const appRouter = Router()


appRouter.get('/', rootRoute )
appRouter.get('/users', users)
appRouter.get('/users/:id', usersId)
appRouter.post('/users', createUsers)