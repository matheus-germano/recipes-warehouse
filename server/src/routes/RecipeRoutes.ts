/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { RecipeController } from '../controllers/RecipeController'
import { Authentication } from '../middlewares/Authentication'
import { Uuid } from '../middlewares/Uuid'

const recipeRouter = Router()

const recipeController = new RecipeController()
const authentication = new Authentication()
const uuid = new Uuid()

recipeRouter.get('/recipes', authentication.isAuthenticated, recipeController.findAll)
recipeRouter.get('/recipes/:id', uuid.verifyUuid, recipeController.findById)

export { recipeRouter }
