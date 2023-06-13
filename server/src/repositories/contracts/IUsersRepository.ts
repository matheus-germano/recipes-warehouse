import { type User } from '../../models/User'

export interface IUsersRepository {
  create: (user: User) => Promise<void>
  findByEmail: (email: string) => Promise<User | null>
}
