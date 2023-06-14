import { config } from '../../ormconfig'
import { type IUser } from '../@types/IUser'
import { User } from '../models/User'
import { type IUsersRepository } from './contracts/IUsersRepository'

export class UsersRepository implements IUsersRepository {
  constructor (
    private readonly usersRepository = config.getRepository(User)
  ) { }

  async create (user: IUser): Promise<void> {
    const createdUser = this.usersRepository.create(user as any)

    await this.usersRepository.save(createdUser)
  }

  async findByEmail (email: string): Promise<IUser | null> {
    const user = await this.usersRepository.findOne({ where: { email } as any })

    return user as any
  }

  async findOne (id: string): Promise<IUser | null> {
    const user = await this.usersRepository.findOne({ where: { id } as any })

    return user as any
  }
}
