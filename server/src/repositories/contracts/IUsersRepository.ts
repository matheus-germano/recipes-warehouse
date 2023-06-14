import { type IUser } from '../../@types/IUser'

export interface IUsersRepository {
  create: (user: IUser) => Promise<void>
  findByEmail: (email: string) => Promise<IUser | null>
  findOne: (id: string) => Promise<IUser | null>
}
