import { Router } from 'express'
import { userRouter } from './UserRoutes'
import { recipeRouter } from './RecipeRoutes'

const routes = Router()

routes.use(userRouter)
routes.use(recipeRouter)

export { routes }
