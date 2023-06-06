import { config } from '../../../ormconfig'
import { User } from '../../models/User'
import { type ICryptoAdapter } from '../../protocols/ICryptoAdapter'

export class SignUpUseCase {
  constructor (
    private readonly usersRepository = config.getRepository(User),
    private readonly cryptoAdapter: ICryptoAdapter
  ) {}

  async execute (user: User) {
    const encryptedPassword = await this.cryptoAdapter.encrypt(user.password)

    const userAlreadyExists = await this.usersRepository.findOne({ where: { email: user.email } })

    if (userAlreadyExists !== null) {
      throw new Error('There is already a user with this e-mail')
    }

    const createdUser = this.usersRepository.create({ ...user, password: encryptedPassword })
    await this.usersRepository.save(createdUser)
  }
}
