import {Component, OnInit} from '@angular/core';
import {TitleService} from "../../services/title.service";
import {Store} from '@ngrx/store';
import RecipeModel from "../../models/Recipe.model";
import {RecipeFormActions} from "../../store/recipeForm/recipeForm.actions";
import {AppState} from "../../store/store";
import {fromRecipeForm} from "../../store/recipeForm/recipeForm.selectors";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styles: [':host {height: 100%; display: block}']
})
export class CreatePageComponent implements OnInit {

  recipe$ = this.store$.select(fromRecipeForm.recipe);
  isEditMode$ = this.store$.select(fromRecipeForm.isEditMode);
  isValid$ = this.store$.select(fromRecipeForm.isValid);

  constructor(private titleService: TitleService,
              private store$: Store<AppState>,
              private activatedRoute: ActivatedRoute) {

  }


  ngOnInit() {
    if (this.activatedRoute.snapshot.data['recipeUid']) {
      this.titleService.setTitle("Rezept bearbeiten");
    } else {
      this.titleService.setTitle("Erfasse ein neues Rezept")
    }
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
