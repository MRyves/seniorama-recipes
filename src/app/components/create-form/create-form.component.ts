import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {RecipeIngredient} from "../../models/RecipeIngredient";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: [
    './create-form.component.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateFormComponent {

  name = new FormControl('', Validators.required);
  amount = new FormControl(null, Validators.required);
  unit = new FormControl('', Validators.required);


  ingredients: RecipeIngredient[] = [];


  addIngredient(ingredient: RecipeIngredient) {
    this.ingredients = [...this.ingredients, ingredient];
  }

  removeIngredient(index: number) {
    console.log('Ingredients: ', index);
    if(this.ingredients.length === 1){
      this.ingredients = [];
    } else {
      this.ingredients.splice(index, 1);
      this.ingredients = [...this.ingredients];
    }
  }
}
