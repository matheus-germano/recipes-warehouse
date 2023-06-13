import { config } from '../../ormconfig'
import { User } from '../models/User'
import { type IUsersRepository } from './contracts/IUsersRepository'

export class UsersRepository implements IUsersRepository {
  constructor (
    private readonly usersRepository = config.getRepository(User)
  ) {}

  async create (user: User): Promise<void> {
    const createdUser = this.usersRepository.create({ ...user })

    await this.usersRepository.save(createdUser)
  }

  async findByEmail (email: string): Promise<User | null> {
    const user = await this.usersRepository.findOne({ where: { email } })

    return user
  }

  async findOne (id: string): Promise<User | null> {
    const user = await this.usersRepository.findOne({ where: { id } })

    return user
  }
}
