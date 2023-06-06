import { RecipeController } from '../controllers/RecipeController'
import { FindAllRecipesUseCaseFactory } from './FindAllRecipesUseCaseFactory'
import { FindRecipeByIdUseCaseFactory } from './FindRecipeByIdUseCaseFactory'

export class RecipeControllerFactory {
  private static _instance: RecipeController | null = null

  public static generate () {
    if (this._instance !== null) {
      return this._instance
    } else {
      const findRecipeByIdUseCase = FindRecipeByIdUseCaseFactory.generate()
      const findAllRecipesUseCase = FindAllRecipesUseCaseFactory.generate()

      this._instance = new RecipeController(findAllRecipesUseCase, findRecipeByIdUseCase)
      return this._instance
    }
  }
}
