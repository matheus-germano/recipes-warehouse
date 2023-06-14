import { type ICategory } from '../../@types/ICategory'

export class ICategoriesRepository {
  create: (category: ICategory) => Promise<void>
  delete: (id: string) => Promise<void>
  update: (category: ICategory) => Promise<void>
  findAll: () => Promise<ICategory[]>
}
