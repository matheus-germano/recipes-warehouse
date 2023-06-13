import { config } from '../../ormconfig'
import { Recipe } from '../models/Recipe'
import { type IRecipesRepository } from './contracts/IRecipesRepository'

export class RecipesRepository implements IRecipesRepository {
  constructor (
    private readonly recipesRepository = config.getRepository(Recipe)
  ) {}

  async create (recipe: Recipe): Promise<void> {
    const createdRecipe = this.recipesRepository.create(recipe)

    await this.recipesRepository.save(createdRecipe)
  }

  async delete (id: string): Promise<void> {
    await this.recipesRepository.delete({ id })
  }

  async update (recipe: Recipe): Promise<void> {
    await this.recipesRepository.update(recipe.id, recipe)
  }

  async findAll (): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.find()

    return recipes
  }

  async findOne (id: string): Promise<Recipe | null> {
    const recipe = await this.recipesRepository.findOne({ where: { id } })

    return recipe
  }
}
