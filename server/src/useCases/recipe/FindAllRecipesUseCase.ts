import { type IRecipe } from '../../@types/IRecipe'
import { type RecipesRepository } from '../../repositories/RecipesRepository'

export class FindAllRecipesUseCase {
  constructor (
    private readonly recipesRepository: RecipesRepository
  ) { }

  async execute (): Promise<IRecipe[]> {
    const recipes = await this.recipesRepository.findAll()

    return recipes
  }
}
