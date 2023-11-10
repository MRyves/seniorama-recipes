import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeIngredientModel} from "../../../models/RecipeIngredient.model";

@Component({
  selector: 'app-ingredient-table',
  templateUrl: './ingredient-table.component.html',
  styleUrls: [
    './ingredient-table.component.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientTableComponent implements OnInit {

  @Input({required: true})
  ingredients!: RecipeIngredientModel[];

  @Output()
  removeIngredient = new EventEmitter<number>();

  displayedColumns = ['amount', 'unit', 'name'];


  remove(index: number) {
    this.removeIngredient.emit(index);
  }

  ngOnInit(): void {
    if (this.removeIngredient.observed) {
      this.displayedColumns.push('actions');
    }
  }
}
