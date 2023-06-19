import { type IIngredient } from '../../@types/IIngrendient'
import { type IUseCase } from '../../protocols/IUseCase'
import { type IngredientsRepository } from '../../repositories/IngredientsRepository'

export class UpdateIngredientUseCase implements IUseCase {
  constructor (
    private readonly ingredientsRepository: IngredientsRepository
  ) { }

  async execute (ingredient: IIngredient): Promise<void> {
    await this.ingredientsRepository.update(ingredient)
  }
}
