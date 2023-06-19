import { type IUseCase } from '../../protocols/IUseCase'
import { type IngredientsRepository } from '../../repositories/IngredientsRepository'

export class CreateIngredientUseCase implements IUseCase {
  constructor (
    private readonly ingredientsRepository: IngredientsRepository
  ) { }

  async execute (name: string): Promise<void> {
    await this.ingredientsRepository.create(name)
  }
}
