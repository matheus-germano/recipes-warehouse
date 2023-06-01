import { config } from "../../ormconfig";
import { Recipe } from "../models/Recipe";

const recipesRepository = config.getRepository(Recipe);

class RecipeController {
  async findAll(): Promise<Recipe[]> {
    const recipes = await recipesRepository.find();

    return recipes;
  }

  async findById(id: string): Promise<Recipe | null> {
    const recipe = await recipesRepository.findOne({ where: { id } });

    return recipe;
  }
}

export { RecipeController }
