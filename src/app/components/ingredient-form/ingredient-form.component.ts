import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {RecipeIngredient} from "../../models/RecipeIngredient";

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientFormComponent {

  @Output()
  addIngredient = new EventEmitter<RecipeIngredient>();

  ingredientAmount = new FormControl();
  ingredientUnit = new FormControl('');
  ingredientName = new FormControl('', Validators.required);


  add() {
    if(!!this.ingredientName.value){
      this.addIngredient.emit({
        amount: this.ingredientAmount.value,
        unit: this.ingredientUnit.value,
        name: this.ingredientName.value,
      })
    }
  }
}
