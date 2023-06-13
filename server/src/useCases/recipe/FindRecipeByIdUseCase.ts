import { type Recipe } from '../../models/Recipe'
import { type IUseCase } from '../../protocols/IUseCase'
import { type RecipesRepository } from '../../repositories/RecipesRepository'

export class FindRecipeByIdUseCase implements IUseCase {
  constructor (
    private readonly recipesRepository: RecipesRepository
  ) { }

  async execute (id: string): Promise<Recipe> {
    const recipe = await this.recipesRepository.findOne(id)

    if (recipe === null) {
      throw new Error('There is no recipe with this id')
    }

    return recipe
  }
}
