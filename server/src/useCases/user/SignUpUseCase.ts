import { type IUser } from '../../@types/IUser'
import { type ICryptoAdapter } from '../../protocols/ICryptoAdapter'
import { type UsersRepository } from '../../repositories/UsersRepository'

export class SignUpUseCase {
  constructor (
    private readonly usersRepository: UsersRepository,
    private readonly cryptoAdapter: ICryptoAdapter
  ) { }

  async execute (user: IUser) {
    const encryptedPassword = await this.cryptoAdapter.encrypt(user.password)

    const userAlreadyExists = await this.usersRepository.findByEmail(user.email)

    if (userAlreadyExists !== null) {
      throw new Error('There is already a user with this e-mail')
    }

    await this.usersRepository.create({ ...user, password: encryptedPassword })
  }
}
