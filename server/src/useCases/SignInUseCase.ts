import { config } from '../../ormconfig'
import { User } from '../models/User'
import { type IAuthAdapter } from '../protocols/IAuthAdapter'
import { type ICryptoAdapter } from '../protocols/ICryptoAdapter'

export class SignInUseCase {
  constructor (
    private readonly usersRepository = config.getRepository(User),
    private readonly cryptoAdapter: ICryptoAdapter,
    private readonly authAdapter: IAuthAdapter
  ) {}

  async execute (email: string, password: string): Promise<string> {
    const userExists = await this.usersRepository.findOne({ where: { email } })

    if (userExists === null) {
      throw new Error('User with this e-mail or password not found')
    }

    const passwordsMatch = this.cryptoAdapter.compare(password, userExists.password)

    if (!passwordsMatch) {
      throw new Error('User with this e-mail or password not found')
    }

    const token = this.authAdapter.generateToken(userExists.id, userExists.name, '2 days')
    return token
  }
}
