/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { UserControllerFactory } from '../factories/UserControllerFactory'

const userRouter = Router()

const userController = UserControllerFactory.generate()

userRouter.post('/users/sign-up', async (req, res) => await userController.signUp(req, res))
userRouter.post('/users/sign-in', async (req, res) => await userController.signIn(req, res))

export { userRouter }
