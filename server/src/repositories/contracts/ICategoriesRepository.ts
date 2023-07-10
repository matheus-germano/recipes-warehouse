import { type ICategory } from '../../@types/ICategory'
import { type Category } from '../../models/Category'

export class ICategoriesRepository {
  create: (name: Category) => Promise<void>
  delete: (id: string) => Promise<void>
  update: (category: ICategory) => Promise<void>
  findAll: () => Promise<ICategory[]>
}
