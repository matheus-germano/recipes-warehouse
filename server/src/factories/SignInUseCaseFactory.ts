import { SignInUseCase } from '../useCases/user/SignInUseCase'
import { AuthAdapterFactory } from './AuthAdapterFactory'
import { CryptoAdapterFactory } from './CryptoAdapterFactory'
import { Factory } from './Factory'
import { UsersRepositoryFactory } from './UsersRepositoryFactory'

export class SignInUseCaseFactory extends Factory {
  private static _instance: SignInUseCase | null = null

  public static generate (): SignInUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      const usersRepository = UsersRepositoryFactory.generate()
      const cryptoAdapter = CryptoAdapterFactory.generate()
      const authAdapter = AuthAdapterFactory.generate()

      this._instance = new SignInUseCase(usersRepository, cryptoAdapter, authAdapter)

      return this._instance
    }
  }
}
