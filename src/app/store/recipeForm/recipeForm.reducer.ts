import RecipeModel from "../../models/Recipe.model";
import {createReducer, on} from "@ngrx/store";
import {RecipeFormActions} from "./recipeForm.actions";

export interface RecipeFormState {
  recipe: RecipeModel;
  isEditMode: boolean;
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
  isEditMode: false
}

export const recipeFormReducer = createReducer(
  initialState,
  on(RecipeFormActions.reset, (_state) => initialState),
  on(RecipeFormActions.update, (_state, {changes}) => ({
    recipe: {..._state.recipe, ...changes}, isEditMode: _state.isEditMode
  })),
  on(RecipeFormActions.save, (_state) => {
    console.log("Saving recipe: ", _state);
    return initialState;
  }),
  on(RecipeFormActions.editRecipe, (_state, {recipe}) => ({recipe, isEditMode: true}))
);
