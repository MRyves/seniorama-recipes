import {createActionGroup, emptyProps, props} from "@ngrx/store";
import RecipeModel from "../../models/Recipe.model";
import {Update} from "@ngrx/entity";

export const RecipeActions = createActionGroup(
  {
    source: 'Recipe',
    events: {
      'query': emptyProps(),
      'added': props<{payload: RecipeModel}>(),
      'modified': props<{payload: Update<RecipeModel>}>(),
      'removed': props<{payload: RecipeModel}>(),
    }
  }
)
