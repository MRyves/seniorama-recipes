import {RecipeIngredient} from "./RecipeIngredient";
import {SubRecipe} from "./SubRecipe";

export default interface Recipe {
  name: string;
  amount: number;
  unit: string;
  ingredients: RecipeIngredient[];
  method: string;
  subRecipe?: SubRecipe;
}
