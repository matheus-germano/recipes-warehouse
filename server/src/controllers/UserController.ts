import { type Request, type Response } from 'express'
import { type User } from '../models/User'
import { type ISignIn } from '../@types/signIn'
import { type SignUpUseCase } from '../useCases/user/SignUpUseCase'
import { type SignInUseCase } from '../useCases/user/SignInUseCase'

export class UserController {
  constructor (
    private readonly signUpUseCase: SignUpUseCase,
    private readonly signInUseCase: SignInUseCase
  ) { }

  async signUp (req: Request<unknown, unknown, User>, res: Response): Promise<Response> {
    try {
      const { id, name, email, password, phoneNumber, profileAvatar } = req.body
      const user: User = { id, name, email, password, phoneNumber, profileAvatar }

      await this.signUpUseCase.execute(user)
      return res.status(200).json({ result: 'User created successfully' })
    } catch {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  async signIn (req: Request<unknown, unknown, ISignIn>, res: Response): Promise<Response> {
    const { email, password } = req.body

    try {
      const token = await this.signInUseCase.execute(email, password)
      return res.status(200).json({ result: { token } })
    } catch {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}
