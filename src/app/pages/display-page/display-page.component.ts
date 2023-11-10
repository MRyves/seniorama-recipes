import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/store";
import {RecipeActions} from "../../store/recipe/recipe.actions";
import * as fromRecipes from "../../store/recipe/recipe.reducer";
import {TitleService} from "../../services/title.service";
import {BehaviorSubject, combineLatest, distinctUntilChanged, map} from "rxjs";
import {RecipeFilter} from "../../models/RecipeFilter.model";

const checkName = (filterValue: Nullable<string>, recipeValue: string) => {
  if (!filterValue) {
    return true;
  }
  console.log("check name: ", {filterValue, recipeValue});
  return recipeValue.toLowerCase().includes(filterValue.trim().toLowerCase());
}

const checkTags = (filterTags: Nullable<string[]>, recipeTags: string[]) => {
  if (!filterTags || !filterTags.length) {
    return true;
  }
  console.log("check tags: ", {filterTags, recipeTags});
  return recipeTags.some(t => filterTags.includes(t));
}

const checkAllergens = (filterAllergens: Nullable<string[]>, recipeAllergens: string[]) => {
  if (!filterAllergens || !filterAllergens.length) {
    return true;
  }
  console.log("Check allergens: ", {filterAllergens, recipeAllergens});
  return recipeAllergens.some(a => filterAllergens.includes(a));
}

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPageComponent implements OnInit {

  filter = new BehaviorSubject<RecipeFilter>({});

  allRecipes$ = combineLatest([this.filter, this.store.select(fromRecipes.selectAll)]).pipe(
    map(([filter, recipes]) =>
      recipes.filter(recipe => (
        checkName(filter.name, recipe.name) &&
        checkTags(filter.tags, recipe.tags) &&
        checkAllergens(filter.allergens, recipe.tags))
      )),
    distinctUntilChanged(),
  );

  constructor(private store: Store<AppState>, private titleService: TitleService) {
    this.titleService.setTitle('');
  }

  ngOnInit() {
    this.store.dispatch(RecipeActions.query());
  }

}
