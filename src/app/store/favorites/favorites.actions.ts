import {createActionGroup, emptyProps, props} from "@ngrx/store";
import RecipeModel from "../../models/Recipe.model";
import {Update} from "@ngrx/entity";
import {FavoriteModel} from "../../models/Favorite.model";

export const FavoritesActions = createActionGroup(
  {
    source: ',Favorites',
    events: {
      'query': emptyProps(),
      'added': props<{payload: FavoriteModel}>(),
      'removed': props<{payload: FavoriteModel}>(),
    }
  }
)
