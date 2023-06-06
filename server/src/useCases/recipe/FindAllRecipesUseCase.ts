import { config } from '../../../ormconfig'
import { Recipe } from '../../models/Recipe'

export class FindAllRecipesUseCase {
  constructor (
    private readonly recipesRepository = config.getRepository(Recipe)
  ) {}

  async execute (): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.find()

    return recipes
  }
}
