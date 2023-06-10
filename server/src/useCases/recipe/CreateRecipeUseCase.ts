import { config } from '../../../ormconfig'
import { Recipe } from '../../models/Recipe'
import { type IUseCase } from '../../protocols/IUseCase'

export class CreateRecipeUseCase implements IUseCase {
  constructor (
    private readonly recipeRepository = config.getRepository(Recipe)
  ) { }

  async execute (recipe: Recipe) {
    const createdRecipe = this.recipeRepository.create({ ...recipe })

    await this.recipeRepository.save(createdRecipe)
  }
}
