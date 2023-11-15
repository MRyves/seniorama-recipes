import {ResolveFn} from "@angular/router";
import RecipeModel from "../../models/Recipe.model";
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/store";
import {selectRecipe} from "../../store/recipe/recipe.reducer";
import {EMPTY, filter} from "rxjs";

export const recipeResolver: ResolveFn<Nullable<RecipeModel>> = (route, state) => {

  const store = inject(Store<AppState>);

  if (state.url.startsWith('/details') && route.params['uid']) {
    return store.select(selectRecipe(route.params['uid'])).pipe(
      filter(Boolean)
    )
  }

  return EMPTY;

}
