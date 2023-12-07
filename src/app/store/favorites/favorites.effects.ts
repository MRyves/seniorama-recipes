import {Actions, createEffect, ofType} from "@ngrx/effects";
import {FavoritesActions} from "./favorites.actions";
import {filter, map, mergeMap, switchMap} from "rxjs";
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
        uid: action.payload.doc.id,
        name: action.payload.doc.data().name,
      };
      switch (action.type) {
        case 'added':
          return FavoritesActions.added({payload});
        case 'removed':
          return FavoritesActions.removed({payload});
        case 'modified':
          return false
        default:
          console.error('Invalid action: ', {action});
          throw new Error('Invalid Action');
      }
    }),
    filter(Boolean)
  ))

  constructor(private actions: Actions, private afs: AngularFirestore) {
  }


}
