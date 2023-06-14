export interface IRecipe {
  id: string
  name: string
  creatorId: string
  description: string
  preparationMethod: string
  preparationTime: number
  servings: number
  createdAt: Date
}
