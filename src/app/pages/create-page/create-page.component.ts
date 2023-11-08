import {Component, OnInit} from '@angular/core';
import {TitleService} from "../../services/title.service";
import {Store} from '@ngrx/store';
import RecipeModel from "../../models/Recipe.model";
import {RecipeFormActions} from "../../store/recipeForm/recipeForm.actions";
import {DEFAULT_RECIPE} from "../../store/recipeForm/recipeForm.reducer";
import {AppState} from "../../store/store";
import {fromRecipeForm} from "../../store/recipeForm/recipeForm.selectors";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styles: [':host {height: 100%; display: block}']
})
export class CreatePageComponent implements OnInit {

  recipe$ = this.store$.select(fromRecipeForm.recipe);
  isEditMode$ = this.store$.select(fromRecipeForm.isEditMode);
  isValid$ = this.store$.select(fromRecipeForm.isValid);

  constructor(private titleService: TitleService, private store$: Store<AppState>) {

  }


  ngOnInit() {
    this.titleService.setTitle("Erfasse ein neues Rezept")
  }

  recipeChanged(changes: Partial<RecipeModel>) {
    this.store$.dispatch(RecipeFormActions.update({changes}));
  }

  resetRecipe() {
    this.store$.dispatch(RecipeFormActions.reset());
  }

  saveRecipe() {
    this.store$.dispatch(RecipeFormActions.save());
  }
}
