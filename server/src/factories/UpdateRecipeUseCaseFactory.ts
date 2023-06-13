import { UpdateRecipeUseCase } from '../useCases/recipe/UpdateRecipeUseCase'
import { Factory } from './Factory'
import { RecipesRepositoryFactory } from './RecipesRepositoryFactory'

export class UpdateRecipeUseCaseFactory extends Factory {
  private static _instance: UpdateRecipeUseCase | null = null

  public static generate (): UpdateRecipeUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      const recipesRepository = RecipesRepositoryFactory.generate()
      this._instance = new UpdateRecipeUseCase(recipesRepository)

      return this._instance
    }
  }
}
