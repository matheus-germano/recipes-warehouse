import { type IUseCase } from '../../protocols/IUseCase'
import { type RecipesRepository } from '../../repositories/RecipesRepository'

export class DeleteRecipeUseCase implements IUseCase {
  constructor (
    private readonly recipesRepository: RecipesRepository
  ) { }

  async execute (id: string) {
    const recipe = await this.recipesRepository.findOne(id)

    if (recipe === null) {
      throw new Error('There is no recipe with this id')
    }

    await this.recipesRepository.delete(id)
  }
}
