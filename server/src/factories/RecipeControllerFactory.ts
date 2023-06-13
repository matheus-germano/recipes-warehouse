import { RecipeController } from '../controllers/RecipeController'
import { CreateRecipeUseCaseFactory } from './CreateRecipeUseCaseFactory'
import { Factory } from './Factory'
import { FindAllRecipesUseCaseFactory } from './FindAllRecipesUseCaseFactory'
import { FindRecipeByIdUseCaseFactory } from './FindRecipeByIdUseCaseFactory'
import { UpdateRecipeUseCaseFactory } from './UpdateRecipeUseCaseFactory'

export class RecipeControllerFactory extends Factory {
  private static _instance: RecipeController | null = null

  public static generate (): RecipeController {
    if (this._instance !== null) {
      return this._instance
    } else {
      const createRecipeUseCase = CreateRecipeUseCaseFactory.generate()
      const updateRecipeUseCase = UpdateRecipeUseCaseFactory.generate()
      const findRecipeByIdUseCase = FindRecipeByIdUseCaseFactory.generate()
      const findAllRecipesUseCase = FindAllRecipesUseCaseFactory.generate()

      this._instance = new RecipeController(createRecipeUseCase, updateRecipeUseCase, findAllRecipesUseCase, findRecipeByIdUseCase)
      return this._instance
    }
  }
}
