import {Component, OnInit} from '@angular/core';
import {AppState} from "./store/store";
import {Store} from "@ngrx/store";
import {RecipeActions} from "./store/recipe/recipe.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipies-mgmt';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(RecipeActions.query());
  }
}
