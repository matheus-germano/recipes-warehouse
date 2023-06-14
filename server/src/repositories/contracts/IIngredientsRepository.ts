import { type IIngredient } from '../../@types/IIngrendient'

export class IIngredientsRepository {
  create: (ingredient: IIngredient) => Promise<void>
  delete: (id: string) => Promise<void>
  update: (ingredient: IIngredient) => Promise<void>
  findAll: () => Promise<IIngredient[]>
}
