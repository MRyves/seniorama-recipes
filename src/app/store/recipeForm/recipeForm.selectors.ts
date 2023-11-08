import {createFeatureSelector, createSelector} from "@ngrx/store";
import {RecipeFormState} from "./recipeForm.reducer";



const selectRecipeFormState = createFeatureSelector<RecipeFormState>('recipeForm');

export const fromRecipeForm = {
  recipe: createSelector(
    selectRecipeFormState,
    (state) => (state.recipe)
  ),

  isEditMode: createSelector(
    selectRecipeFormState,
    (state) => (state.isEditMode)
  ),

  isValid: createSelector(
    selectRecipeFormState,
    (state) => (state.isValid)
  )

};

