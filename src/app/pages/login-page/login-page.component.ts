import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppState} from "../../store/store";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../store/auth/auth.actions";
import {fromAuth} from "../../store/auth/auth.selectors";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  loginError$ = this.store.select(fromAuth.error);
  isLoading = this.store.select(fromAuth.isLoading);

  constructor(private store: Store<AppState>) {

  }


  submitLogin() {
    this.store.dispatch(AuthActions.login({
      credentials: {
        email: this.loginForm.controls.email.value!,
        password: this.loginForm.controls.password.value!
      }
    }))
  }
}
