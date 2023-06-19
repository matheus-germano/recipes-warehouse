import { type ICategory } from '../../@types/ICategory'

export class ICategoriesRepository {
  create: (name: string) => Promise<void>
  delete: (id: string) => Promise<void>
  update: (category: ICategory) => Promise<void>
  findAll: () => Promise<ICategory[]>
}
