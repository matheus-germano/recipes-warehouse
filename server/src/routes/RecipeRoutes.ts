/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { Uuid } from '../middlewares/Uuid'
import { RecipeControllerFactory } from '../factories/RecipeControllerFactory'
import { AuthenticationFactory } from '../factories/AuthenticationFactory'

const recipeRouter = Router()

const recipeController = RecipeControllerFactory.generate()

const uuid = new Uuid()
const authentication = AuthenticationFactory.generate()

recipeRouter.post('/recipes', (req, res, next) => authentication.isAuthenticated(req, res, next), async (req, res) => await recipeController.create(req, res))
recipeRouter.put('/recipes', (req, res, next) => authentication.isAuthenticated(req, res, next), async (req, res) => await recipeController.update(req, res))
recipeRouter.get('/recipes', (req, res, next) => authentication.isAuthenticated(req, res, next), async (req, res) => await recipeController.findAll(req, res))
recipeRouter.get('/recipes/:id', (req, res, next) => uuid.verifyUuid(req, res, next), async (req, res) => await recipeController.findById(req, res))

export { recipeRouter }
