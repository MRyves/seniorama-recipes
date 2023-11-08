import {RecipeFormState} from "./recipeForm/recipeForm.reducer";
import {RecipesState} from "./recipe/recipe.reducer";

export interface AppState {
  recipes: RecipesState;
  recipeForm: RecipeFormState;
}
