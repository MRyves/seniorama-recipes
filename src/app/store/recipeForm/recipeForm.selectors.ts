import {createFeatureSelector, createSelector} from "@ngrx/store";
import {RecipeFormState} from "./recipeForm.reducer";

export const selectRecipeFormState = createFeatureSelector<RecipeFormState>('recipeForm');

export const selectRecipe = createSelector(
  selectRecipeFormState,
  (state) => (state.recipe)
);

export const selectRecipeFormEditMode = createSelector(
  selectRecipeFormState,
  (state) => (state.isEditMode)
);
