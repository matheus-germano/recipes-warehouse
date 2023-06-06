import { Authentication } from '../middlewares/Authentication'
import { AuthAdapterFactory } from './AuthAdapterFactory'

export class AuthenticationFactory {
  private static _instance: Authentication | null = null

  public static generate () {
    if (this._instance !== null) {
      return this._instance
    } else {
      const authAdapter = AuthAdapterFactory.generate()

      this._instance = new Authentication(authAdapter)

      return this._instance
    }
  }
}
