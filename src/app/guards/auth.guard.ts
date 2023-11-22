import {CanActivateFn} from '@angular/router';
import {inject} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {map} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const fbAuth = inject(AngularFireAuth);
  return fbAuth.authState.pipe(map(user => !!user));
};
