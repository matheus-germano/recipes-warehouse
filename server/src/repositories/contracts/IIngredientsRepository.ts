import { type IIngredient } from '../../@types/IIngrendient'
import { type Ingredient } from '../../models/Ingredient'

export class IIngredientsRepository {
  create: (ingredient: Ingredient) => Promise<void>
  delete: (id: string) => Promise<void>
  update: (ingredient: IIngredient) => Promise<void>
  findAll: () => Promise<IIngredient[]>
  findByIds: (ids: string[]) => Promise<IIngredient[]>
}
