import { type Request, type Response } from 'express'
import { type CreateIngredientUseCase } from '../useCases/ingredient/CreateIngredientUseCase'
import { type DeleteIngredientUseCase } from '../useCases/ingredient/DeleteIngredientUseCase'
import { type FindAllIngredientsUseCase } from '../useCases/ingredient/FindAllIngredientsUseCase'
import { type UpdateIngredientUseCase } from '../useCases/ingredient/UpdateIngredientUseCase'
import { type IIngredient } from '../@types/IIngrendient'

export class IngredientController {
  constructor (
    private readonly createIngredientUseCase: CreateIngredientUseCase,
    private readonly updateIngredientUseCase: UpdateIngredientUseCase,
    private readonly deleteIngredientUseCase: DeleteIngredientUseCase,
    private readonly findAllIngredientsUseCase: FindAllIngredientsUseCase
  ) { }

  async create (req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body

      await this.createIngredientUseCase.execute(name)

      return res.status(200).json({ result: 'Ingredient created successfully' })
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { name } = req.body
      const ingredient: IIngredient = { id, name }

      await this.updateIngredientUseCase.execute(ingredient)

      return res.status(200).json({ result: 'Ingredient updated successfully' })
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  async delete (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      await this.deleteIngredientUseCase.execute(id)

      return res.status(200).json({ result: 'Ingredient deleted successfully' })
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  async findAll (req: Request, res: Response): Promise<Response> {
    try {
      const ingredients = await this.findAllIngredientsUseCase.execute()

      return res.status(200).json(ingredients)
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}
