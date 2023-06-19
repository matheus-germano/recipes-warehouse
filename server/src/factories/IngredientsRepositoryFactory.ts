import { IngredientsRepository } from '../repositories/IngredientsRepository'
import { Factory } from './Factory'

export class IngredientsRepositoryFactory extends Factory {
  private static _instance: IngredientsRepository | null = null

  public static generate (): IngredientsRepository {
    if (this._instance !== null) {
      return this._instance
    } else {
      this._instance = new IngredientsRepository()
      return this._instance
    }
  }
}
