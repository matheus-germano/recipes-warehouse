import { In } from 'typeorm'
import { config } from '../../ormconfig'
import { type IIngredient } from '../@types/IIngrendient'
import { Ingredient } from '../models/Ingredient'
import { type IIngredientsRepository } from './contracts/IIngredientsRepository'

export class IngredientsRepository implements IIngredientsRepository {
  constructor (
    private readonly ingredientsRepository = config.getRepository(Ingredient)
  ) { }

  async create (ingredientToCreate: Ingredient): Promise<void> {
    const ingredient = this.ingredientsRepository.create(ingredientToCreate)

    await this.ingredientsRepository.save(ingredient)
  }

  async delete (id: string): Promise<void> {
    await this.ingredientsRepository.delete(id)
  }

  async update (ingredient: IIngredient): Promise<void> {
    await this.ingredientsRepository.update(ingredient.id, ingredient as any)
  }

  async findAll (): Promise<IIngredient[]> {
    const ingredients = this.ingredientsRepository.find()

    return ingredients as any
  }

  async findByIds (ids: string[]): Promise<IIngredient[]> {
    const ingredients = this.ingredientsRepository.findBy({ id: In(ids) } as any)

    return ingredients as any
  }
}
