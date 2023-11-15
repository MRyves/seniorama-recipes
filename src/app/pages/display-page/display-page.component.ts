import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/store";
import * as fromRecipes from "../../store/recipe/recipe.reducer";
import {TitleService} from "../../services/title.service";
import {BehaviorSubject, combineLatest, distinctUntilChanged, map} from "rxjs";
import {RecipeFilter} from "../../models/RecipeFilter.model";
import {ConfirmDialogService} from "../../services/confirm-dialog.service";
import {RecipeService} from "../../services/recipe.service";

const checkName = (filterValue: Nullable<string>, recipeValue: string) => {
  if (!filterValue) {
    return true;
  }
  return recipeValue.toLowerCase().includes(filterValue.trim().toLowerCase());
}

const checkTags = (filterTags: Nullable<string[]>, recipeTags: string[]) => {
  if (!filterTags || !filterTags.length) {
    return true;
  }
  console.log("check tags: ", {filterTags, recipeTags});
  const joinedRecipeTags = recipeTags.join(',');
  return filterTags.some(ft => joinedRecipeTags.includes(ft));
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
export class DisplayPageComponent {

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

  constructor(private store: Store<AppState>,
              private titleService: TitleService,
              private recipeService: RecipeService,
              private confirmService: ConfirmDialogService) {
    this.titleService.setTitle('');
  }

  deleteRecipe(recipeUid: string) {
    this.confirmService.confirm("Möchtest du das Rezept wirklich löschen?", "Löschen!")
      .subscribe(result => {
        if (result) {
          this.recipeService.delete(recipeUid);
        }
      });

  }
}
