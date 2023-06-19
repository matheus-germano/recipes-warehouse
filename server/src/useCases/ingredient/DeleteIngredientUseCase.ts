import { type IUseCase } from '../../protocols/IUseCase'
import { type IngredientsRepository } from '../../repositories/IngredientsRepository'

export class DeleteIngredientUseCase implements IUseCase {
  constructor (
    private readonly ingredientsRepository: IngredientsRepository
  ) { }

  async execute (id: string): Promise<void> {
    await this.ingredientsRepository.delete(id)
  }
}
