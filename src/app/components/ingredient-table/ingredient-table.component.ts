import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeIngredient} from "../../models/RecipeIngredient";

@Component({
  selector: 'app-ingredient-table',
  templateUrl: './ingredient-table.component.html',
  styleUrls: [
    './ingredient-table.component.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientTableComponent {

  @Input({required: true})
  ingredients!: RecipeIngredient[];

  @Output()
  removeIngredient = new EventEmitter<number>();

  remove(index: number){
    this.removeIngredient.emit(index);
  }
}
