import { type Category } from '../models/Category'
import { type Ingredient } from '../models/Ingredient'

export class RecipeDTO {
  name: string
  description: string
  preparationMethod: string
  preparationTime: number
  servings: number
  ingredients: Ingredient[]
  categories: Category[]
}
