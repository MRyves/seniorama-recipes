import {Component, OnInit} from '@angular/core';
import {TitleService} from "../../services/title.service";
import {Store} from '@ngrx/store';
import {selectRecipe, selectRecipeFormEditMode} from "../../store/recipeForm/recipeForm.selectors";
import RecipeModel from "../../models/Recipe.model";
import {RecipeFormActions} from "../../store/recipeForm/recipeForm.actions";
import {DEFAULT_RECIPE} from "../../store/recipeForm/recipeForm.reducer";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styles: [':host {height: 100%; display: block}']
})
export class CreatePageComponent implements OnInit {

  recipe: RecipeModel = {
    ...DEFAULT_RECIPE
  }
  recipe$ = this.store.select(selectRecipe);
  isEditMode$ = this.store.select(selectRecipeFormEditMode);

  constructor(private titleService: TitleService, private store: Store) {

  }


  ngOnInit() {
    this.titleService.setTitle("Erfasse ein neues Rezept")
  }

  recipeChanged(changes: Partial<RecipeModel>) {
    this.store.dispatch(RecipeFormActions.update({changes}));
  }

  resetRecipe() {
    this.store.dispatch(RecipeFormActions.reset());
  }
}
