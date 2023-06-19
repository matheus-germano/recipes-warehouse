import { UpdateIngredientUseCase } from '../useCases/ingredient/UpdateIngredientUseCase'
import { Factory } from './Factory'
import { IngredientsRepositoryFactory } from './IngredientsRepositoryFactory'

export class UpdateIngredientUseCaseFactory extends Factory {
  private static _instance: UpdateIngredientUseCase | null = null

  public static generate (): UpdateIngredientUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      const ingredientsRepository = IngredientsRepositoryFactory.generate()
      this._instance = new UpdateIngredientUseCase(ingredientsRepository)

      return this._instance
    }
  }
}
