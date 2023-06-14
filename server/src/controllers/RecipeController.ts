// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Request, Response } from 'express'
import { type FindAllRecipesUseCase } from '../useCases/recipe/FindAllRecipesUseCase'
import { type FindRecipeByIdUseCase } from '../useCases/recipe/FindRecipeByIdUseCase'
import { type CreateRecipeUseCase } from '../useCases/recipe/CreateRecipeUseCase'
import { type UpdateRecipeUseCase } from '../useCases/recipe/UpdateRecipeUseCase'
import { type DeleteRecipeUseCase } from '../useCases/recipe/DeleteRecipeUseCase'
import { type IRecipe } from '../@types/IRecipe'

export class RecipeController {
  constructor (
    private readonly createRecipeUseCase: CreateRecipeUseCase,
    private readonly updateRecipeUseCase: UpdateRecipeUseCase,
    private readonly deleteRecipeUseCase: DeleteRecipeUseCase,
    private readonly findAllRecipesUseCase: FindAllRecipesUseCase,
    private readonly findRecipeByIdUseCase: FindRecipeByIdUseCase
  ) { }

  async create (req: Request<unknown, unknown, IRecipe>, res: Response): Promise<Response> {
    try {
      const { id, name, creatorId, description, preparationMethod, preparationTime, servings, createdAt } = req.body
      const recipe: IRecipe = { id, name, creatorId, description, preparationMethod, preparationTime, servings, createdAt }

      await this.createRecipeUseCase.execute(recipe)

      return res.status(200).json({ result: 'Recipe created successfully' })
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  async update (req: Request<unknown, unknown, IRecipe>, res: Response): Promise<Response> {
    try {
      const { id, name, creatorId, description, preparationMethod, preparationTime, servings, createdAt } = req.body
      const recipe = { id, name, creatorId, description, preparationMethod, preparationTime, servings, createdAt }

      await this.updateRecipeUseCase.execute(recipe)

      return res.status(200).json({ result: 'Recipe updated successfully' })
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  async delete (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      await this.deleteRecipeUseCase.execute(id)

      return res.status(200).json({ result: 'Recipe deleted successfully' })
    } catch {
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
    try {
      const { id } = req.params

      const recipe = await this.findRecipeByIdUseCase.execute(id)

      return res.status(200).json(recipe)
    } catch {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}
