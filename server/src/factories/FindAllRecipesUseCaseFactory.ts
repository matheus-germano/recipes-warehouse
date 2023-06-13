import { FindAllRecipesUseCase } from '../useCases/recipe/FindAllRecipesUseCase'
import { Factory } from './Factory'
import { RecipesRepositoryFactory } from './RecipesRepositoryFactory'

export class FindAllRecipesUseCaseFactory extends Factory {
  private static _instance: FindAllRecipesUseCase | null = null

  public static generate (): FindAllRecipesUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      const recipesRepository = RecipesRepositoryFactory.generate()
      this._instance = new FindAllRecipesUseCase(recipesRepository)

      return this._instance
    }
  }
}
