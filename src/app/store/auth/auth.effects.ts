import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthActions} from "./auth.actions";
import {map, switchMap, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store";
import User from "../../models/User.model";
import {Router} from "@angular/router";

@Injectable()
export default class AuthEffects {

  login$ = createEffect(() => this.actions.pipe(
    ofType(AuthActions.login),
    switchMap(async (action) => {
      try {
        await this.fbAuth.signInWithEmailAndPassword(action.credentials.email, action.credentials.password);
        return AuthActions.loginSuccess();
      } catch (err) {
        console.error('Error during login: ', err);
        return AuthActions.loginFailure({msg: 'Login fehlgeschlagen! Überprüfe dein E-Mail & Passwort'});
      }
    })
  ), {
    useEffectsErrorHandler: false
  });

  loginSuccess$ = createEffect(() => this.actions.pipe(
    ofType(AuthActions.loginSuccess),
    tap(() => this.router.navigate(['']))
  ), {dispatch: false});

  getAuthState$ = createEffect(() => this.actions.pipe(
    ofType(AuthActions.getAuthState),
    switchMap(() => this.fbAuth.authState),
    map((user) => {
      if (user) {
        return AuthActions.setUser({user: {uid: user.uid, email: user.email!} as User});
      } else {
        return AuthActions.logout();
      }
    })
  ));

  logout$ = createEffect(() => this.actions.pipe(
    ofType(AuthActions.logout),
    switchMap((_) => this.fbAuth.signOut()),
  ), {dispatch: false});


  constructor(private actions: Actions, private fbAuth: AngularFireAuth, private store: Store<AppState>, private router: Router) {
  }

}
