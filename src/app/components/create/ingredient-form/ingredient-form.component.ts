import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {RecipeIngredientModel} from "../../../models/RecipeIngredient.model";

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientFormComponent {

  @ViewChild('amountInput')
  amountInput!: ElementRef<HTMLInputElement>;

  @Output()
  addIngredient = new EventEmitter<RecipeIngredientModel>();

  ingredientAmount = new FormControl();
  ingredientUnit = new FormControl('');
  ingredientName = new FormControl('', Validators.required);


  add() {
    if(!!this.ingredientName.value){
      this.addIngredient.emit({
        amount: this.ingredientAmount.value,
        unit: this.ingredientUnit.value,
        name: this.ingredientName.value,
      });
      this.ingredientUnit.reset();
      this.ingredientAmount.reset();
      this.ingredientName.reset();
      this.amountInput.nativeElement.focus();
    }
  }
}
