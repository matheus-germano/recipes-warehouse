import { type IIngredient } from '../../@types/IIngrendient'

export class IIngredientsRepository {
  create: (name: string) => Promise<void>
  delete: (id: string) => Promise<void>
  update: (ingredient: IIngredient) => Promise<void>
  findAll: () => Promise<IIngredient[]>
}
