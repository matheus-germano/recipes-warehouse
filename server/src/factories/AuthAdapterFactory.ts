import { AuthAdapter } from '../adapters/AuthAdapter'

export class AuthAdapterFactory {
  private static _instance: AuthAdapter | null = null

  public static generate () {
    if (this._instance !== null) {
      return this._instance
    } else {
      this._instance = new AuthAdapter()

      return this._instance
    }
  }
}
