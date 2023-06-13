import { type Recipe } from '../../models/Recipe'
import { type RecipesRepository } from '../../repositories/RecipesRepository'

export class FindAllRecipesUseCase {
  constructor (
    private readonly recipesRepository: RecipesRepository
  ) {}

  async execute (): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.findAll()

    return recipes
  }
}
