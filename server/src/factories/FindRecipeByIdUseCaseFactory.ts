import { FindRecipeByIdUseCase } from '../useCases/recipe/FindRecipeByIdUseCase'
import { Factory } from './Factory'
import { RecipesRepositoryFactory } from './RecipesRepositoryFactory'

export class FindRecipeByIdUseCaseFactory extends Factory {
  private static _instance: FindRecipeByIdUseCase | null = null

  public static generate (): FindRecipeByIdUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      const recipesRepository = RecipesRepositoryFactory.generate()
      this._instance = new FindRecipeByIdUseCase(recipesRepository)

      return this._instance
    }
  }
}
