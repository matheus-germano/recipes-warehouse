import { CreateIngredientUseCase } from '../useCases/ingredient/CreateIngredientUseCase'
import { Factory } from './Factory'
import { IngredientsRepositoryFactory } from './IngredientsRepositoryFactory'

export class CreateIngredientUseCaseFactory extends Factory {
  private static _instance: CreateIngredientUseCase | null = null

  public static generate (): CreateIngredientUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      const ingredientsRepository = IngredientsRepositoryFactory.generate()
      this._instance = new CreateIngredientUseCase(ingredientsRepository)

      return this._instance
    }
  }
}
