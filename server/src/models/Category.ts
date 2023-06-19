import { Entity, OneToMany } from 'typeorm'
import { Base } from './Base'
import { Recipe } from './Recipe'

@Entity()
export class Category extends Base {
  @OneToMany(() => Recipe, recipe => recipe.category)
    recipes: Recipe[]
}
