import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {SubRecipeModel} from "../../../../models/SubRecipe.model";

@Component({
  selector: 'app-sub-recipe-accordion',
  templateUrl: './sub-recipe-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubRecipeAccordionComponent {

  @Input({required: true})
  subRecipes!: SubRecipeModel[];

  @Output()
  removeSubRecipe = new EventEmitter<number>();

  onRemoveSubRecipe(i: number) {
    this.removeSubRecipe.emit(i);
  }
}
