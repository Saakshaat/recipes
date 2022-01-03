import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Recipe } from "../models/recipe";
import { CreateRecipe, UpdateRecipe } from "../schemas/recipe";
import { Like } from "typeorm";

@Resolver()
export class RecipeResolver {
  @Query(() => [Recipe])
  recipes() {
    return Recipe.find();
  }

  @Query(() => Recipe)
  recipe(@Arg("id") id: string) {
    return Recipe.findOne({ where: { id } });
  }

  @Query(() => [Recipe])
  recipeByName(@Arg("name") name: string) {
    return Recipe.find({ name: Like(`%${name}`) });
  }

  // @Query(() => [Recipe])
  // recipeByIngredients(@Arg('ingredients', type => [String]) ingredients: string[]) {
  //   return Recipe.getRepository()
  //     .createQueryBuilder()
  //     .where(":ingredients = ANY(:...ingredients)", { ingredients })
  //     .getMany();
  // }

  @Mutation(() => Recipe)
  async createRecipe(@Arg("data") data: CreateRecipe) {
    const recipe = Recipe.create(data);
    await recipe.save();

    return recipe;
  }

  @Mutation(() => Recipe)
  async updateRecipe(@Arg("id") id: string, @Arg("data") data: UpdateRecipe) {
    const recipe = await Recipe.findOne({ where: { id } });
    if (!recipe) throw new Error("Recipe not found!");
    Object.assign(recipe, data);
    await recipe.save();
    return recipe;
  }

  @Mutation(() => Boolean)
  async deleteRecipe(@Arg("id") id: string) {
    const recipe = await Recipe.findOne({ where: { id } });

    if (!recipe) throw new Error("Recipe not found!");
    await recipe.remove();

    return true;
  }
}
