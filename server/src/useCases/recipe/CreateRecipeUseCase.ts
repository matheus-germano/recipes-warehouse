import { type Recipe } from '../../models/Recipe'
import { type IUseCase } from '../../protocols/IUseCase'
import { type RecipesRepository } from '../../repositories/RecipesRepository'

export class CreateRecipeUseCase implements IUseCase {
  constructor (
    private readonly recipeRepository: RecipesRepository
  ) { }

  async execute (recipe: Recipe) {
    await this.recipeRepository.create({ ...recipe })
  }
}
