import { type RecipeCreationDTO } from '../../dtos/RecipeCreationDTO'
import { Recipe } from '../../models/Recipe'
import { type IUseCase } from '../../protocols/IUseCase'
import { type CategoriesRepository } from '../../repositories/CategoriesRepository'
import { type IngredientsRepository } from '../../repositories/IngredientsRepository'
import { type RecipesRepository } from '../../repositories/RecipesRepository'
import { type UsersRepository } from '../../repositories/UsersRepository'

export class CreateRecipeUseCase implements IUseCase {
  constructor (
    private readonly recipesRepository: RecipesRepository,
    private readonly usersRepository: UsersRepository,
    private readonly ingredientsRepository: IngredientsRepository,
    private readonly categoriesRepository: CategoriesRepository
  ) { }

  async execute (recipeDTO: RecipeCreationDTO, creatorId: string) {
    const creatingRecipeUserExists = await this.usersRepository.findOne(creatorId)

    if (creatingRecipeUserExists === null) {
      throw new Error('There is no user with this id')
    }

    const ingredients = await this.ingredientsRepository.findByIds(recipeDTO.ingredients)

    if (ingredients.length !== recipeDTO.ingredients.length) {
      throw new Error('One or more informed ingredients does not exists')
    }

    const categories = await this.categoriesRepository.findByIds(recipeDTO.categories)

    if (categories.length !== recipeDTO.categories.length) {
      throw new Error('One or more informed categories does not exists')
    }

    const recipeToCreate = new Recipe()
    recipeToCreate.setCreatorId(creatorId)
    recipeToCreate.setName(recipeDTO.name)
    recipeToCreate.setDescription(recipeDTO.description)
    recipeToCreate.setPreparationMethod(recipeDTO.preparationMethod)
    recipeToCreate.setPreparationTime(recipeDTO.preparationTime)
    recipeToCreate.setServings(recipeDTO.servings)
    recipeToCreate.setCreatedAt(new Date())
    recipeToCreate.ingredients = ingredients as any
    recipeToCreate.categories = categories as any

    await this.recipesRepository.create(recipeToCreate)
  }
}
