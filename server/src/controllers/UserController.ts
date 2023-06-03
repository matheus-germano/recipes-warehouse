import { type Request, type Response } from 'express'
import { config } from '../../ormconfig'
import { User } from '../models/User'
import { type ISignIn } from '../@types/signIn'
import { type ICryptoAdapter } from '../protocols/ICryptoAdapter'
import { type IAuthAdapter } from '../protocols/IAuthAdapter'

const usersRepository = config.getRepository(User)

export class UserController {
  constructor (
    private readonly cryptoAdapter: ICryptoAdapter,
    private readonly authAdapter: IAuthAdapter
  ) {}

  async signUp (req: Request<unknown, unknown, User>, res: Response): Promise<Response> {
    const { id, name, email, password, phoneNumber, profileAvatar } = req.body
    const encryptedPassword = await this.cryptoAdapter.encrypt(password)

    const userAlreadyExists = await usersRepository.findOne({ where: { email } })

    if (userAlreadyExists !== null) {
      return res.status(400).json({ error: 'There is already a user with this e-mail' })
    }

    const user = usersRepository.create({ id, name, email, password: encryptedPassword, phoneNumber, profileAvatar })
    await usersRepository.save(user)

    return res.status(200).json({ result: 'User created successfully' })
  }

  async signIn (req: Request<unknown, unknown, ISignIn>, res: Response): Promise<Response> {
    const { email, password } = req.body

    const userExists = await usersRepository.findOne({ where: { email } })

    if (userExists === null) {
      return res.status(404).json({ error: 'User with this e-mail or password not found' })
    }

    const passwordsMatch = this.cryptoAdapter.compare(password, userExists.password)

    if (!passwordsMatch) {
      return res.status(404).json({ error: 'User with this e-mail or password not found' })
    }

    const token = this.authAdapter.generateToken(userExists.id, userExists.name, '2 days')

    return res.status(200).json({ result: { token } })
  }
}
