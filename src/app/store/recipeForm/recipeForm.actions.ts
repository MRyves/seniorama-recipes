import {createActionGroup, emptyProps, props} from "@ngrx/store";
import RecipeModel from "../../models/Recipe.model";

export const RecipeFormActions = createActionGroup({
  source: 'RecipeForm',
  events: {
    'Update': props<{ changes: Partial<RecipeModel> }>(),
    'Reset': emptyProps(),
    'Save': emptyProps(),
    'Edit Recipe': props<{ recipe: RecipeModel }>(),
  }
});
