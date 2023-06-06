import { FindRecipeByIdUseCase } from '../useCases/recipe/FindRecipeByIdUseCase'

export class FindRecipeByIdUseCaseFactory {
  private static _instance: FindRecipeByIdUseCase | null = null

  public static generate () {
    if (this._instance !== null) {
      return this._instance
    } else {
      this._instance = new FindRecipeByIdUseCase()

      return this._instance
    }
  }
}
