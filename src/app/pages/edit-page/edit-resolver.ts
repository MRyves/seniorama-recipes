import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/store";
import {RecipeFormActions} from "../../store/recipeForm/recipeForm.actions";
import {fromRecipeForm} from "../../store/recipeForm/recipeForm.selectors";
import {combineLatest, filter, map, tap} from "rxjs";
import {selectAll} from "../../store/recipe/recipe.reducer";

export const editResolver: ResolveFn<Nullable<string>> = (route, state) => {
  const store = inject(Store<AppState>);

  const allRecipes$ = store.select(selectAll).pipe(filter((recipes) => !!recipes && recipes.length > 0));

  const formRecipe$ = store.select(fromRecipeForm.recipe);

  const routeUid = route.params['uid'];

  return combineLatest([formRecipe$, allRecipes$]).pipe(
    tap(([formRecipe, allRecipes]) => {
      const actualRecipe = allRecipes.find(r => r.uid === routeUid)
      if (formRecipe.uid !== routeUid && !!actualRecipe) {
        store.dispatch(RecipeFormActions.editRecipe({recipe: actualRecipe}));
      } else if (!actualRecipe) {
        console.error('Tried to edit recipe with wrong state: ', {
          formRecipe,
          actualRecipe,
          allRecipes
        });
        throw new Error('This recipe does not exists');
      }
    }),
    map(() => routeUid));
}
