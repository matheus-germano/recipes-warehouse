import { SignInUseCase } from '../useCases/user/SignInUseCase'
import { AuthAdapterFactory } from './AuthAdapterFactory'
import { CryptoAdapterFactory } from './CryptoAdapterFactory'

export class SignInUseCaseFactory {
  private static _instance: SignInUseCase | null = null

  public static generate () {
    if (this._instance !== null) {
      return this._instance
    } else {
      const cryptoAdapter = CryptoAdapterFactory.generate()
      const authAdapter = AuthAdapterFactory.generate()

      this._instance = new SignInUseCase(undefined, cryptoAdapter, authAdapter)

      return this._instance
    }
  }
}
