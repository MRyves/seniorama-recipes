import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RecipeFormActions} from "./recipeForm.actions";
import {map, switchMap, tap, withLatestFrom} from "rxjs";
import {AppState} from "../store";
import {RecipeService} from "../../services/recipe.service";
import {Router} from "@angular/router";

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

  constructor(private actions$: Actions,
              private router: Router,
              private store$: Store<AppState>,
              private service: RecipeService) {
  }

}
