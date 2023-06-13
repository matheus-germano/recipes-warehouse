import { UsersRepository } from '../repositories/UsersRepository'
import { Factory } from './Factory'

export class UsersRepositoryFactory extends Factory {
  private static _instance: UsersRepository | null = null

  public static generate (): UsersRepository {
    if (this._instance !== null) {
      return this._instance
    } else {
      this._instance = new UsersRepository()
      return this._instance
    }
  }
}
