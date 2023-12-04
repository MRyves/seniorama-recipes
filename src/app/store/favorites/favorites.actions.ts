import {createActionGroup, emptyProps, props} from "@ngrx/store";
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
