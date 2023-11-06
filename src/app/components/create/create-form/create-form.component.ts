import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {RecipeIngredient} from "../../../models/RecipeIngredient";
import {SubRecipe} from "../../../models/SubRecipe";
import {MatDialog} from "@angular/material/dialog";
import {SubRecipeCreateDialogComponent} from "../sub-recipe-create-dialog/sub-recipe-create-dialog.component";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: [
    './create-form.component.css'
  ],
})
export class CreateFormComponent {

  name = new FormControl('', Validators.required);
  amount = new FormControl(null, Validators.required);
  unit = new FormControl('', Validators.required);


  ingredients: RecipeIngredient[] = [];
  subRecipes: SubRecipe[] = [];

  constructor(public dialog: MatDialog) {
  }

  addIngredient(ingredient: RecipeIngredient) {
    this.ingredients = [...this.ingredients, ingredient];
  }

  removeIngredient(index: number) {
    if (this.ingredients.length <= 1) {
      this.ingredients = [];
    } else {
      this.ingredients.splice(index, 1);
      this.ingredients = [...this.ingredients];
    }
  }


  openSubRecipeDialog() {
    const dialogRef = this.dialog.open(SubRecipeCreateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.subRecipes = [...this.subRecipes, result];
      }
    })
  }

  removeSubRecipe(index: number) {
    console.log("Deleting index: ", index);
    if (this.subRecipes.length <= 1) {
      this.subRecipes = [];
    } else {
      this.subRecipes.splice(index, 1)
      this.subRecipes = [...this.subRecipes];
    }
  }
}
