import { UserController } from '../controllers/UserController'
import { Factory } from './Factory'
import { SignInUseCaseFactory } from './SignInUseCaseFactory'
import { SignUpUseCaseFactory } from './SignUpUseCaseFactory'

export class UserControllerFactory extends Factory {
  private static _instance: UserController | null = null

  public static generate (): UserController {
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
