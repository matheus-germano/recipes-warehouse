import { RecipeController } from '../controllers/RecipeController'
import { Factory } from './Factory'
import { FindAllRecipesUseCaseFactory } from './FindAllRecipesUseCaseFactory'
import { FindRecipeByIdUseCaseFactory } from './FindRecipeByIdUseCaseFactory'

export class RecipeControllerFactory extends Factory {
  private static _instance: RecipeController | null = null

  public static generate (): RecipeController {
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
