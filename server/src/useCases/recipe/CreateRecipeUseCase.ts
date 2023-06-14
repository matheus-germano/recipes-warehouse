import { type IRecipe } from '../../@types/IRecipe'
import { type IUseCase } from '../../protocols/IUseCase'
import { type RecipesRepository } from '../../repositories/RecipesRepository'
import { type UsersRepository } from '../../repositories/UsersRepository'

export class CreateRecipeUseCase implements IUseCase {
  constructor (
    private readonly recipesRepository: RecipesRepository,
    private readonly usersRepository: UsersRepository
  ) { }

  async execute (recipe: IRecipe) {
    const creatingRecipeUserExists = await this.usersRepository.findOne(recipe.creatorId)

    if (creatingRecipeUserExists === null) {
      throw new Error('There is no user with this id')
    }

    await this.recipesRepository.create(recipe)
  }
}
