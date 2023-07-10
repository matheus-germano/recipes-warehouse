import { CreateRecipeUseCase } from '../useCases/recipe/CreateRecipeUseCase'
import { CategoriesRepositoryFactory } from './CategoriesRepositoryFactory'
import { Factory } from './Factory'
import { IngredientsRepositoryFactory } from './IngredientsRepositoryFactory'
import { RecipesRepositoryFactory } from './RecipesRepositoryFactory'
import { UsersRepositoryFactory } from './UsersRepositoryFactory'

export class CreateRecipeUseCaseFactory extends Factory {
  private static _instance: CreateRecipeUseCase | null = null

  public static generate (): CreateRecipeUseCase {
    if (this._instance !== null) {
      return this._instance
    } else {
      const recipesRepository = RecipesRepositoryFactory.generate()
      const usersRepository = UsersRepositoryFactory.generate()
      const ingredientsRepository = IngredientsRepositoryFactory.generate()
      const categoriesRepository = CategoriesRepositoryFactory.generate()
      this._instance = new CreateRecipeUseCase(recipesRepository, usersRepository, ingredientsRepository, categoriesRepository)

      return this._instance
    }
  }
}
