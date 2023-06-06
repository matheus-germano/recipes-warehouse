import { FindAllRecipesUseCase } from '../useCases/recipe/FindAllRecipesUseCase'

export class FindAllRecipesUseCaseFactory {
  private static _instance: FindAllRecipesUseCase | null = null

  public static generate () {
    if (this._instance !== null) {
      return this._instance
    } else {
      this._instance = new FindAllRecipesUseCase()

      return this._instance
    }
  }
}
