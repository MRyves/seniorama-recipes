import {RecipeFormState} from "./recipeForm/recipeForm.reducer";
import {RecipesState} from "./recipe/recipe.reducer";
import {AuthState} from "./auth/auth.reducers";

export interface AppState {
  recipes: RecipesState;
  recipeForm: RecipeFormState;
  auth: AuthState,
}
