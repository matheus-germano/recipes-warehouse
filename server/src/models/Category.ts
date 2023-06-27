import { Entity, ManyToMany } from 'typeorm'
import { Base } from './Base'
import { Recipe } from './Recipe'

@Entity()
export class Category extends Base {
  @ManyToMany(() => Recipe, recipe => recipe.categories)
    recipes: Recipe[]
}
