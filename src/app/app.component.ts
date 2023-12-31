import {Component, OnInit} from '@angular/core';
import {AppState} from "./store/store";
import {Store} from "@ngrx/store";
import {RecipeActions} from "./store/recipe/recipe.actions";
import {AuthActions} from "./store/auth/auth.actions";
import {fromAuth} from "./store/auth/auth.selectors";
import {FavoritesActions} from "./store/favorites/favorites.actions";
import {PromptUpdateService} from "./services/update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipies-mgmt';

  currentUser$ = this.store.select(fromAuth.currentUser);

  constructor(private store: Store<AppState>, private updateService: PromptUpdateService) {
  }

  ngOnInit() {
    this.store.dispatch(RecipeActions.query());
    this.store.dispatch(AuthActions.getAuthState());
    this.store.dispatch(FavoritesActions.query());
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
