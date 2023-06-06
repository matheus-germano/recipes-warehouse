/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { Authentication } from '../middlewares/Authentication'
import { Uuid } from '../middlewares/Uuid'
import { RecipeControllerFactory } from '../factories/RecipeControllerFactory'

const recipeRouter = Router()

const recipeController = RecipeControllerFactory.generate()

const uuid = new Uuid()
const authentication = new Authentication()

recipeRouter.get('/recipes', authentication.isAuthenticated, async (req, res) => await recipeController.findAll(req, res))
recipeRouter.get('/recipes/:id', uuid.verifyUuid, async (req, res) => await recipeController.findById(req, res))

export { recipeRouter }
