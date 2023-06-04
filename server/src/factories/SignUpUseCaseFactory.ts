import { SignUpUseCase } from '../useCases/SignUpUseCase'
import { CryptoAdapterFactory } from './CryptoAdapterFactory'

export class SignUpUseCaseFactory {
  private static _instance: SignUpUseCase | null = null

  public static generate () {
    if (this._instance !== null) {
      return this._instance
    } else {
      const cryptoAdapter = CryptoAdapterFactory.generate()
      this._instance = new SignUpUseCase(undefined, cryptoAdapter)

      return this._instance
    }
  }
}
