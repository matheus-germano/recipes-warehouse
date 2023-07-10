import { config } from '../../ormconfig'
import { type IRecipe } from '../@types/IRecipe'
import { Recipe } from '../models/Recipe'
import { type IRecipesRepository } from './contracts/IRecipesRepository'

export class RecipesRepository implements IRecipesRepository {
  constructor (
    private readonly recipesRepository = config.getRepository(Recipe)
  ) { }

  async create (recipe: Recipe): Promise<void> {
    const createdRecipe = this.recipesRepository.create(recipe)

    await this.recipesRepository.save(createdRecipe)
  }

  async delete (id: string): Promise<void> {
    await this.recipesRepository.delete({ id } as any)
  }

  async update (recipe: IRecipe): Promise<void> {
    await this.recipesRepository.update(recipe.id, recipe as any)
  }

  async findAll (): Promise<IRecipe[]> {
    const recipes = await this.recipesRepository.find()

    return recipes as any
  }

  async findOne (id: string): Promise<IRecipe | null> {
    const recipe = await this.recipesRepository.findOne({ where: { id } as any })

    return recipe as any
  }
}
