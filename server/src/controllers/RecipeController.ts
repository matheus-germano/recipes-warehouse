// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Request, Response } from 'express'
import { type FindAllRecipesUseCase } from '../useCases/recipe/FindAllRecipesUseCase'
import { type FindRecipeByIdUseCase } from '../useCases/recipe/FindRecipeByIdUseCase'
import { type CreateRecipeUseCase } from '../useCases/recipe/CreateRecipeUseCase'
import { type Recipe } from '../models/Recipe'
import { type UpdateRecipeUseCase } from '../useCases/recipe/UpdateRecipeUseCase'

export class RecipeController {
  constructor (
    private readonly createRecipeUseCase: CreateRecipeUseCase,
    private readonly updateRecipeUseCase: UpdateRecipeUseCase,
    private readonly findAllRecipesUseCase: FindAllRecipesUseCase,
    private readonly findRecipeByIdUseCase: FindRecipeByIdUseCase
  ) {}

  async create (req: Request<unknown, unknown, Recipe>, res: Response): Promise<Response> {
    try {
      const { id, name, creatorId, creator, description, preparationMethod, preparationTime, servings, createdAt } = req.body
      const recipe = { id, name, creatorId, creator, description, preparationMethod, preparationTime, servings, createdAt }

      await this.createRecipeUseCase.execute(recipe)

      return res.status(200).json({ result: 'Recipe created successfully' })
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  async update (req: Request<unknown, unknown, Recipe>, res: Response): Promise<Response> {
    try {
      const { id, name, creatorId, creator, description, preparationMethod, preparationTime, servings, createdAt } = req.body
      const recipe = { id, name, creatorId, creator, description, preparationMethod, preparationTime, servings, createdAt }

      await this.updateRecipeUseCase.execute(recipe)

      return res.status(200).json({ result: 'Recipe updated successfully' })
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

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
