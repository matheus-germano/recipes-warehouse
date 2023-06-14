import { type IRecipe } from '../../@types/IRecipe'

export interface IRecipesRepository {
  create: (recipe: IRecipe) => Promise<void>
  delete: (id: string) => Promise<void>
  update: (recipe: IRecipe) => Promise<void>
  findAll: () => Promise<IRecipe[]>
  findOne: (id: string) => Promise<IRecipe | null>
}
