import { CategoriesRepository } from '../repositories/CategoriesRepository'
import { Factory } from './Factory'

export class CategoriesRepositoryFactory extends Factory {
  private static _instance: CategoriesRepository | null = null

  public static generate (): CategoriesRepository {
    if (this._instance !== null) {
      return this._instance
    } else {
      this._instance = new CategoriesRepository()
      return this._instance
    }
  }
}
