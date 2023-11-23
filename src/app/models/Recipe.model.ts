import {RecipeIngredientModel} from "./RecipeIngredient.model";
import {SubRecipeModel} from "./SubRecipe.model";

export type Allergen =
  "Gluten" |
  "Krebstiere" |
  "Eier" |
  "Fische" |
  "Erdnuss" |
  "Soja" |
  "Laktose" |
  "Nüsse" |
  "Sellerie" |
  "Senf" |
  "Sesam" |
  "Sulfite" |
  "Lupinen" |
  "Weichtiere";

export default interface RecipeModel {
  readonly uid?: string;
  name: string;
  amount: number;
  gramPerPortion: number;
  ingredients: RecipeIngredientModel[];
  tags: string[];
  allergens: Allergen[];
  subRecipe: SubRecipeModel[];
  method: string;
  serve?: string;
  comment?: string;
  plate?: string;
  time?: string;
}
