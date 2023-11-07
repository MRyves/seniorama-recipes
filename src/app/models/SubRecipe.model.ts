import {RecipeIngredientModel} from "./RecipeIngredient.model";

export interface SubRecipeModel {
  name: string;
  ingredients: RecipeIngredientModel[];
}
