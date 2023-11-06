import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeIngredient} from "../../../models/RecipeIngredient";

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
  ingredients!: RecipeIngredient[];

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
