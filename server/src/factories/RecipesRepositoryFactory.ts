import { RecipesRepository } from '../repositories/RecipesRepository'
import { Factory } from './Factory'

export class RecipesRepositoryFactory extends Factory {
  private static _instance: RecipesRepository | null = null

  public static generate (): RecipesRepository {
    if (this._instance !== null) {
      return this._instance
    } else {
      this._instance = new RecipesRepository()
      return this._instance
    }
  }
}
