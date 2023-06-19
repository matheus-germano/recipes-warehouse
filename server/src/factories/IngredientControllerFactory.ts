import { IngredientController } from '../controllers/IngredientController'
import { CreateIngredientUseCaseFactory } from './CreateIngredientUseCaseFactory'
import { DeleteIngredientUseCaseFactory } from './DeleteIngredientUseCaseFactory'
import { Factory } from './Factory'
import { FindAllIngredientsUseCaseFactory } from './FindAllIngredientsUseCaseFactory'
import { UpdateIngredientUseCaseFactory } from './UpdateIngredientUseCaseFactory'

export class IngredientControllerFactory extends Factory {
  private static _instance: IngredientController | null = null

  public static generate (): IngredientController {
    if (this._instance !== null) {
      return this._instance
    } else {
      const createIngredientUseCase = CreateIngredientUseCaseFactory.generate()
      const updateIngredientUseCase = UpdateIngredientUseCaseFactory.generate()
      const deleteIngredientUseCase = DeleteIngredientUseCaseFactory.generate()
      const findAllIngredientsUseCase = FindAllIngredientsUseCaseFactory.generate()

      this._instance = new IngredientController(createIngredientUseCase, updateIngredientUseCase, deleteIngredientUseCase, findAllIngredientsUseCase)
      return this._instance
    }
  }
}
