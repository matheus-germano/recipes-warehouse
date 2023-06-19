import { Entity, ManyToMany } from 'typeorm'
import { Base } from './Base'
import { Recipe } from './Recipe'

@Entity()
export class Ingredient extends Base {
  @ManyToMany(() => Recipe, recipe => recipe.ingredients)
    recipes: Recipe[]
}
