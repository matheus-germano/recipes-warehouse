import { type IIngredient } from '../../@types/IIngrendient'
import { type IUseCase } from '../../protocols/IUseCase'
import { type IngredientsRepository } from '../../repositories/IngredientsRepository'

export class FindAllIngredientsUseCase implements IUseCase {
  constructor (
    private readonly ingredientsRepository: IngredientsRepository
  ) { }

  async execute (): Promise<IIngredient[]> {
    const ingredients = await this.ingredientsRepository.findAll()

    return ingredients
  }
}
