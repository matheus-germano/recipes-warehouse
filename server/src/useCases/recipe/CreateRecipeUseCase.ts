import { type Recipe } from '../../models/Recipe'
import { type IUseCase } from '../../protocols/IUseCase'
import { type RecipesRepository } from '../../repositories/RecipesRepository'
import { type UsersRepository } from '../../repositories/UsersRepository'

export class CreateRecipeUseCase implements IUseCase {
  constructor (
    private readonly recipesRepository: RecipesRepository,
    private readonly usersRepository: UsersRepository
  ) { }

  async execute (recipe: Recipe) {
    const creatingRecipeUserExists = await this.usersRepository.findOne(recipe.id)

    if (creatingRecipeUserExists === null) {
      throw new Error('There is no user with this id')
    }

    await this.recipesRepository.create(recipe)
  }
}
