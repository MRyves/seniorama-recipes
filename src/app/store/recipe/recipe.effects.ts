import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {RecipeActions} from "./recipe.actions";
import {map, mergeMap, switchMap} from "rxjs";
import RecipeModel from "../../models/Recipe.model";

@Injectable()
export default class RecipeEffects {

  query$ = createEffect(() => this.actions$.pipe(
    ofType(RecipeActions.query),
    switchMap(action => this.afs.collection<RecipeModel>('recipes').stateChanges()),
    mergeMap(actions => actions),
    map(action => {
      const recipe = {...action.payload.doc.data(), uid: action.payload.doc.id} as RecipeModel;
      switch (action.type) {
        case 'added':
          return RecipeActions.added({payload: recipe});
        case 'modified':
          return RecipeActions.modified({payload: {id: recipe.uid!, changes: recipe}});
        case 'removed':
          return RecipeActions.removed({payload: recipe});
        default:
          throw new Error("Invalid Action!");
      }
    })
  ));

  constructor(private afs: AngularFirestore, private actions$: Actions) {

  }

}
