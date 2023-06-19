/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { Uuid } from '../middlewares/Uuid'
import { AuthenticationFactory } from '../factories/AuthenticationFactory'
import { IngredientControllerFactory } from '../factories/IngredientControllerFactory'

const ingredientRouter = Router()

const ingredientController = IngredientControllerFactory.generate()

const uuid = new Uuid()
const authentication = AuthenticationFactory.generate()

ingredientRouter.post('/ingredients', (req, res, next) => authentication.isAuthenticated(req, res, next), async (req, res) => await ingredientController.create(req, res))
ingredientRouter.put('/ingredients/:id', (req, res, next) => authentication.isAuthenticated(req, res, next), async (req, res) => await ingredientController.update(req, res))
ingredientRouter.delete('/ingredients/:id', (req, res, next) => authentication.isAuthenticated(req, res, next), (req, res, next) => uuid.verifyUuid(req, res, next), async (req, res) => await ingredientController.delete(req, res))
ingredientRouter.get('/ingredients', async (req, res) => await ingredientController.findAll(req, res))

export { ingredientRouter }
