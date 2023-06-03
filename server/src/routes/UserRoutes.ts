/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { UserControllerFactory } from '../factories/UserControllerFactory'

const userRouter = Router()

const userController = UserControllerFactory.generate()

userRouter.post('/users/sign-up', userController.signUp)
userRouter.post('/users/sign-in', userController.signIn)

export { userRouter }
