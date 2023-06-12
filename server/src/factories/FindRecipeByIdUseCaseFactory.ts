import { FindRecipeByIdUseCase } from '../useCases/recipe/FindRecipeByIdUseCase'
import { Factory } from './Factory'

export class FindRecipeByIdUseCaseFactory extends Factory {
  private static _instance: FindRecipeByIdUseCase | null = null

  public static generate (): FindRecipeByIdUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      this._instance = new FindRecipeByIdUseCase()

      return this._instance
    }
  }
}
