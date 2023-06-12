import { SignUpUseCase } from '../useCases/user/SignUpUseCase'
import { CryptoAdapterFactory } from './CryptoAdapterFactory'
import { Factory } from './Factory'

export class SignUpUseCaseFactory extends Factory {
  private static _instance: SignUpUseCase | null = null

  public static generate (): SignUpUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      const cryptoAdapter = CryptoAdapterFactory.generate()
      this._instance = new SignUpUseCase(undefined, cryptoAdapter)

      return this._instance
    }
  }
}
