import { Router } from 'express'
import { userRouter } from './routes/UserRoutes'
import { recipeRouter } from './routes/RecipeRoutes'

const routes = Router()

routes.use(userRouter)
routes.use(recipeRouter)

export { routes }
