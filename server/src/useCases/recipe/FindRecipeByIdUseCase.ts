import { config } from '../../../ormconfig'
import { Recipe } from '../../models/Recipe'

export class FindRecipeByIdUseCase {
  constructor (
    private readonly recipesRepository = config.getRepository(Recipe)
  ) {}

  async execute (id: string): Promise<Recipe> {
    const recipe = await this.recipesRepository.findOne({ where: { id } })

    if (recipe === null) {
      throw new Error('There is no recipe with this id')
    }

    return recipe
  }
}
