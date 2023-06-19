import { config } from '../../ormconfig'
import { type IIngredient } from '../@types/IIngrendient'
import { Ingredient } from '../models/Ingredient'
import { type IIngredientsRepository } from './contracts/IIngredientsRepository'

export class IngredientsRepository implements IIngredientsRepository {
  constructor (
    private readonly ingredientsRepository = config.getRepository(Ingredient)
  ) { }

  async create (name: string): Promise<void> {
    const ingredient = this.ingredientsRepository.create(name as any)

    await this.ingredientsRepository.save(ingredient)
  }

  async delete (id: string): Promise<void> {
    await this.ingredientsRepository.delete(id)
  }

  async update (ingredient: IIngredient): Promise<void> {
    await this.ingredientsRepository.update(ingredient.id, ingredient.name as any)
  }

  async findAll (): Promise<IIngredient[]> {
    const ingredients = this.ingredientsRepository.find()

    return ingredients as any
  }
}