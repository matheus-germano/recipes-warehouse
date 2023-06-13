import { type Recipe } from '../../models/Recipe'

export interface IRecipesRepository {
  create: (recipe: Recipe) => Promise<void>
  findAll: () => Promise<Recipe[]>
  findOne: (id: string) => Promise<Recipe | null>
}
