import { config } from '../../../ormconfig'
import { Recipe } from '../../models/Recipe'
import { type IUseCase } from '../../protocols/IUseCase'

export class FindRecipeByIdUseCase implements IUseCase {
  constructor (
    private readonly recipesRepository = config.getRepository(Recipe)
  ) { }

  async execute (id: string): Promise<Recipe> {
    const recipe = await this.recipesRepository.findOne({ where: { id } })

    if (recipe === null) {
      throw new Error('There is no recipe with this id')
    }

    return recipe
  }
}
