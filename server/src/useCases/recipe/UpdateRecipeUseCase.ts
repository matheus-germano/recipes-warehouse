import { type IRecipe } from '../../@types/IRecipe'
import { type IUseCase } from '../../protocols/IUseCase'
import { type RecipesRepository } from '../../repositories/RecipesRepository'

export class UpdateRecipeUseCase implements IUseCase {
  constructor (
    private readonly recipeRepository: RecipesRepository
  ) { }

  async execute (recipe: IRecipe) {
    const recipeExists = await this.recipeRepository.findOne(recipe.id)

    if (recipeExists === null) {
      throw new Error('There is no recipe with this id')
    }

    await this.recipeRepository.update(recipe)
  }
}
