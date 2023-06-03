/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { UserController } from '../controllers/UserController'

const userRouter = Router()

const userController = new UserController()

userRouter.post('/users/sign-up', userController.signUp)
userRouter.post('/users/sign-in', userController.signIn)

export { userRouter }
