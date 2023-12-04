import {RecipeFormState} from "./recipeForm/recipeForm.reducer";
import {RecipesState} from "./recipe/recipe.reducer";
import {AuthState} from "./auth/auth.reducers";
import {FavoritesState} from "./favorites/favorites.reducer";

export interface AppState {
  recipes: RecipesState;
  recipeForm: RecipeFormState;
  auth: AuthState,
  favorites: FavoritesState
}
