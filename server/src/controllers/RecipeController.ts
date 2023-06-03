// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Request, Response } from 'express'
import { config } from '../../ormconfig'
import { Recipe } from '../models/Recipe'

const recipesRepository = config.getRepository(Recipe)

class RecipeController {
  async findAll (req: Request, res: Response): Promise<Response> {
    const recipes = await recipesRepository.find()

    return res.status(200).json(recipes)
  }

  async findById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const recipe = await recipesRepository.findOne({ where: { id } })

    if (recipe === null) {
      return res.status(400).json({ error: 'There is no recipe with this id' })
    }

    return res.status(200).json(recipe)
  }
}

export { RecipeController }
