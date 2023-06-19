import { FindAllIngredientsUseCase } from '../useCases/ingredient/FindAllIngredientsUseCase'
import { Factory } from './Factory'
import { IngredientsRepositoryFactory } from './IngredientsRepositoryFactory'

export class FindAllIngredientsUseCaseFactory extends Factory {
  private static _instance: FindAllIngredientsUseCase | null = null

  public static generate (): FindAllIngredientsUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      const ingredientsRepository = IngredientsRepositoryFactory.generate()
      this._instance = new FindAllIngredientsUseCase(ingredientsRepository)

      return this._instance
    }
  }
}
