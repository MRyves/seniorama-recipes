import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {SubRecipe} from "../../../models/SubRecipe";

@Component({
  selector: 'app-sub-recipe-accordion',
  templateUrl: './sub-recipe-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubRecipeAccordionComponent {

  @Input({required: true})
  subRecipes!: SubRecipe[];

  @Output()
  removeSubRecipe = new EventEmitter<number>();

  onRemoveSubRecipe(i: number) {
    this.removeSubRecipe.emit(i);
  }
}
