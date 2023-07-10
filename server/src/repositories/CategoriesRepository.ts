import { In } from 'typeorm'
import { config } from '../../ormconfig'
import { type ICategory } from '../@types/ICategory'
import { type ICategoriesRepository } from './contracts/ICategoriesRepository'
import { Category } from '../models/Category'

export class CategoriesRepository implements ICategoriesRepository {
  constructor (
    private readonly categoriesRepository = config.getRepository(Category)
  ) { }

  async create (categoryToCreate: Category): Promise<void> {
    const category = this.categoriesRepository.create(categoryToCreate)

    await this.categoriesRepository.save(category)
  }

  async delete (id: string): Promise<void> {
    await this.categoriesRepository.delete(id)
  }

  async update (category: ICategory): Promise<void> {
    await this.categoriesRepository.update(category.id, category as any)
  }

  async findAll (): Promise<ICategory[]> {
    const categories = this.categoriesRepository.find()

    return categories as any
  }

  async findByIds (ids: string[]): Promise<ICategory[]> {
    const categories = this.categoriesRepository.findBy({ id: In(ids) } as any)

    return categories as any
  }
}
