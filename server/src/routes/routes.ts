import { Router } from 'express'
import { userRouter } from './UserRoutes'
import { recipeRouter } from './RecipeRoutes'
import { ingredientRouter } from './IngredientRoutes'

const routes = Router()

routes.use(userRouter)
routes.use(recipeRouter)
routes.use(ingredientRouter)

export { routes }
