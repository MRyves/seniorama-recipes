import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RecipeFormActions} from "./recipeForm.actions";
import {map, switchMap, tap, withLatestFrom} from "rxjs";
import {AppState} from "../store";
import {RecipeService} from "../../services/recipe.service";
import {Router} from "@angular/router";
import {selectAll} from "../recipe/recipe.reducer";

@Injectable()
export default class RecipeFormEffects {

  persistRecipe$ = createEffect(() => this.actions$.pipe(
    ofType(RecipeFormActions.save),
    withLatestFrom(this.store$),
    switchMap(([_, store]) => this.service.save(store.recipeForm).then(() => store.recipeForm)),
    tap((recipeForm) => {
      if (recipeForm.isEditMode) {
        this.router.navigate(['details', recipeForm.recipe.uid]);
      }
    }),
    map(() => (RecipeFormActions.reset()))
  ));

  startEdit$ = createEffect(() => this.actions$.pipe(
    ofType(RecipeFormActions.startEditRecipe),
    withLatestFrom(this.store$.select(selectAll)),
    map(([action, store]) => {
      const recipe = store.find(r => r.uid === action.recipeUid);
      if (recipe) {
        return RecipeFormActions.editRecipe({recipe});
      }
      console.error('Failed to edit Recipe, id not found in store: ', action.recipeUid);
      throw new Error('Something went wrong, please try again');
    })
  ));

  constructor(private actions$: Actions,
              private router: Router,
              private store$: Store<AppState>,
              private service: RecipeService) {
  }

}
