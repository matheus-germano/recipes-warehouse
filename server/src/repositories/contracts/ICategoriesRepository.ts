import { type Category } from '../../models/Category'

export class ICategoriesRepository {
  create: (category: Category) => Promise<void>
  delete: (id: string) => Promise<void>
  update: (category: Category) => Promise<void>
  findAll: () => Promise<Category[]>
}
