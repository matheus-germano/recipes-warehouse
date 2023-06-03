import { UserController } from '../controllers/UserController'
import { AuthAdapterFactory } from './AuthAdapterFactory'
import { CryptoAdapterFactory } from './CryptoAdapterFactory'

export class UserControllerFactory {
  private static _instance: UserController | null = null

  public static generate () {
    if (this._instance !== null) {
      return this._instance
    } else {
      const cryptoAdapter = CryptoAdapterFactory.generate()
      const authAdapter = AuthAdapterFactory.generate()

      this._instance = new UserController(cryptoAdapter, authAdapter)
      return this._instance
    }
  }
}
