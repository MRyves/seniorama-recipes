import RecipeModel from "../../models/Recipe.model";
import {createReducer, on} from "@ngrx/store";
import {RecipeFormActions} from "./recipeForm.actions";

export interface RecipeFormState {
  recipe: RecipeModel;
  isEditMode: boolean;
  isValid: boolean;
}

export const DEFAULT_RECIPE = {
  name: '',
  amount: 110,
  gramPerPortion: 100,
  method: '',
  subRecipe: [],
  ingredients: [],
  allergens: [],
  tags: []
};

const initialState: RecipeFormState = {
  recipe: {
    ...DEFAULT_RECIPE
  },
  isEditMode: false,
  isValid: false,
}

const isFormValid = (recipe: RecipeModel) => !!(
  recipe.name &&
  recipe.tags &&
  recipe.gramPerPortion &&
  recipe.amount &&
  recipe.ingredients.length > 0
);

export const recipeFormReducer = createReducer(
    initialState,
    on(RecipeFormActions.reset, (_state) => initialState),
    on(RecipeFormActions.update, (_state, {changes}) => {
      const recipe = {..._state.recipe, ...changes};
      const isValid = isFormValid(recipe)
      return {
        recipe: recipe,
        isEditMode: _state.isEditMode,
        isValid: isValid
      }
    }),
    on(RecipeFormActions.editRecipe, (_state, {recipe}) => ({recipe, isEditMode: true, isValid: false}))
  )
;
