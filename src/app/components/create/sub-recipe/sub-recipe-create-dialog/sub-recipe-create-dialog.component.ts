import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Output} from '@angular/core';
import {RecipeIngredientModel} from "../../../../models/RecipeIngredient.model";
import {FormControl, Validators} from "@angular/forms";
import {SubRecipeModel} from "../../../../models/SubRecipe.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SubRecipeAccordionComponent} from "../sub-recipe-accordion/sub-recipe-accordion.component";

@Component({
  selector: 'app-sub-recipe-create-panel',
  templateUrl: './sub-recipe-create-dialog.component.html',
})
export class SubRecipeCreateDialogComponent {

  name = new FormControl('', Validators.required);
  ingredients: RecipeIngredientModel[] = [];

  constructor(public dialogRef: MatDialogRef<SubRecipeCreateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: {subRecipes: SubRecipeModel[]}) {
  }

  addIngredient($event: RecipeIngredientModel) {
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
      this.dialogRef.close({
        name: this.name.value,
        ingredients: this.ingredients,
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
