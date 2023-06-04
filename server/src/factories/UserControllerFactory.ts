import { UserController } from '../controllers/UserController'
import { SignInUseCaseFactory } from './SignInUseCaseFactory'
import { SignUpUseCaseFactory } from './SignUpUseCaseFactory'

export class UserControllerFactory {
  private static _instance: UserController | null = null

  public static generate () {
    if (this._instance !== null) {
      return this._instance
    } else {
      const signUpUseCase = SignUpUseCaseFactory.generate()
      const signInUseCase = SignInUseCaseFactory.generate()

      this._instance = new UserController(signUpUseCase, signInUseCase)
      return this._instance
    }
  }
}
