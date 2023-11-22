import {Component, OnInit} from '@angular/core';
import {AppState} from "./store/store";
import {Store} from "@ngrx/store";
import {RecipeActions} from "./store/recipe/recipe.actions";
import {AuthActions} from "./store/auth/auth.actions";
import {fromAuth} from "./store/auth/auth.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipies-mgmt';

  currentUser$ = this.store.select(fromAuth.currentUser);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(RecipeActions.query());
    this.store.dispatch(AuthActions.getAuthState());
  }

    logout() {
        this.store.dispatch(AuthActions.logout());
    }
}
