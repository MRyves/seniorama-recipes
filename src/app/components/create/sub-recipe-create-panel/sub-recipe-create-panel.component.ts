import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {RecipeIngredient} from "../../../models/RecipeIngredient";
import {FormControl, Validators} from "@angular/forms";
import {SubRecipe} from "../../../models/SubRecipe";

@Component({
  selector: 'app-sub-recipe-create-panel',
  templateUrl: './sub-recipe-create-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubRecipeCreatePanelComponent {
  @Output()
  addSubRecipe = new EventEmitter<SubRecipe>();

  name = new FormControl('', Validators.required);
  ingredients: RecipeIngredient[] = [];

  addIngredient($event: RecipeIngredient) {
    this.ingredients = [...this.ingredients, $event];
  }

  removeIngredient(index: number) {
    if (this.ingredients.length === 1) {
      this.ingredients = [];
    } else {
      this.ingredients.splice(index);
      this.ingredients = [...this.ingredients];
    }
  }

  add() {
    if (this.name.value) {
      this.addSubRecipe.emit({
        name: this.name.value,
        ingredients: this.ingredients,
      })
    }
  }
}
