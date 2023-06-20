import { Ingredient } from '../../models/Ingredient'
import { type IUseCase } from '../../protocols/IUseCase'
import { type IngredientsRepository } from '../../repositories/IngredientsRepository'

export class CreateIngredientUseCase implements IUseCase {
  constructor (
    private readonly ingredientsRepository: IngredientsRepository
  ) { }

  async execute (name: string): Promise<void> {
    const ingredient = new Ingredient()
    ingredient.setName(name)

    await this.ingredientsRepository.create(ingredient)
  }
}
