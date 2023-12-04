import {Actions, createEffect, ofType} from "@ngrx/effects";
import {FavoritesActions} from "./favorites.actions";
import {map, mergeMap, switchMap} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FavoriteModel} from "../../models/Favorite.model";
import {Injectable} from "@angular/core";

@Injectable()
export class FavoritesEffects {

  query$ = createEffect(() => this.actions.pipe(
    ofType(FavoritesActions.query),
    switchMap(() => this.afs.collection<FavoriteModel>('favorites').stateChanges()),
    mergeMap(actions => actions),
    map((action) => {
      const payload = {
        name: action.payload.doc.data().name,
        uid: action.payload.doc.id,
      };
      switch (action.type) {
        case 'added':
          return FavoritesActions.added({payload});
        case 'removed':
          return FavoritesActions.removed({payload});
        case 'modified':
        default:
          throw new Error('Invalid Action');
      }
    })
  ))

  constructor(private actions: Actions, private afs: AngularFirestore) {

  }


}
