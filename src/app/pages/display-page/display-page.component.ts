import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/store";
import {RecipeActions} from "../../store/recipe/recipe.actions";
import * as fromRecipes from "../../store/recipe/recipe.reducer";
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPageComponent implements OnInit {

  allRecipes$ = this.store.select(fromRecipes.selectAll);

  constructor(private store: Store<AppState>, private titleService: TitleService) {
    this.titleService.setTitle('');
  }

  ngOnInit() {
    this.store.dispatch(RecipeActions.query());
  }

}
