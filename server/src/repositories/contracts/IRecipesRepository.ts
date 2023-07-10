import { type IRecipe } from '../../@types/IRecipe'
import { type Recipe } from '../../models/Recipe'

export interface IRecipesRepository {
  create: (recipe: Recipe) => Promise<void>
  delete: (id: string) => Promise<void>
  update: (recipe: IRecipe) => Promise<void>
  findAll: () => Promise<IRecipe[]>
  findOne: (id: string) => Promise<IRecipe | null>
}
