import { type Ingredient } from '../../models/Ingredient'

export class IIngredientsRepository {
  create: (ingredient: Ingredient) => Promise<void>
  delete: (id: string) => Promise<void>
  update: (ingredient: Ingredient) => Promise<void>
  findAll: () => Promise<Ingredient[]>
}
