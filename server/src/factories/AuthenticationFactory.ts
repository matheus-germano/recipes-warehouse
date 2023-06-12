import { Authentication } from '../middlewares/Authentication'
import { AuthAdapterFactory } from './AuthAdapterFactory'
import { Factory } from './Factory'

export class AuthenticationFactory extends Factory {
  private static _instance: Authentication | null = null

  public static generate (): Authentication {
    if (this._instance !== null) {
      return this._instance
    } else {
      const authAdapter = AuthAdapterFactory.generate()

      this._instance = new Authentication(authAdapter)

      return this._instance
    }
  }
}
