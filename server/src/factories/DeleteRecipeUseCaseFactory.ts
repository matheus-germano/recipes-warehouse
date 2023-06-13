import { DeleteRecipeUseCase } from '../useCases/recipe/DeleteRecipeUseCase'
import { Factory } from './Factory'
import { RecipesRepositoryFactory } from './RecipesRepositoryFactory'

export class DeleteRecipeUseCaseFactory extends Factory {
  private static _instance: DeleteRecipeUseCase | null = null

  public static generate (): DeleteRecipeUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      const recipesRepository = RecipesRepositoryFactory.generate()
      this._instance = new DeleteRecipeUseCase(recipesRepository)

      return this._instance
    }
  }
}
