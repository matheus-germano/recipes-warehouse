import { FindAllRecipesUseCase } from '../useCases/recipe/FindAllRecipesUseCase'
import { Factory } from './Factory'

export class FindAllRecipesUseCaseFactory extends Factory {
  private static _instance: FindAllRecipesUseCase | null = null

  public static generate (): FindAllRecipesUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      this._instance = new FindAllRecipesUseCase()

      return this._instance
    }
  }
}
