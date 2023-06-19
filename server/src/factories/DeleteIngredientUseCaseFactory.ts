import { DeleteIngredientUseCase } from '../useCases/ingredient/DeleteIngredientUseCase'
import { Factory } from './Factory'
import { IngredientsRepositoryFactory } from './IngredientsRepositoryFactory'

export class DeleteIngredientUseCaseFactory extends Factory {
  private static _instance: DeleteIngredientUseCase | null = null

  public static generate (): DeleteIngredientUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      const ingredientsRepository = IngredientsRepositoryFactory.generate()
      this._instance = new DeleteIngredientUseCase(ingredientsRepository)

      return this._instance
    }
  }
}
