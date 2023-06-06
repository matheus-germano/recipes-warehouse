// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Request, Response } from 'express'
import { type FindAllRecipesUseCase } from '../useCases/recipe/FindAllRecipesUseCase'
import { type FindRecipeByIdUseCase } from '../useCases/recipe/FindRecipeByIdUseCase'

export class RecipeController {
  constructor (
    private readonly findAllRecipesUseCase: FindAllRecipesUseCase,
    private readonly findRecipeByIdUseCase: FindRecipeByIdUseCase
  ) {}

  async findAll (req: Request, res: Response): Promise<Response> {
    try {
      const recipes = await this.findAllRecipesUseCase.execute()

      return res.status(200).json(recipes)
    } catch {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  async findById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      const recipe = await this.findRecipeByIdUseCase.execute(id)

      return res.status(200).json(recipe)
    } catch {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}
