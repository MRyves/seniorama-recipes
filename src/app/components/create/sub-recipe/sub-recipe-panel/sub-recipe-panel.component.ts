import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {SubRecipe} from "../../../../models/SubRecipe";

@Component({
  selector: 'app-sub-recipe-panel',
  templateUrl: './sub-recipe-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubRecipePanelComponent {

  @Output()
  removeRecipe = new EventEmitter();

  @Input({required: true})
  subRecipe!: SubRecipe;

  removeIngredient(index: number) {

  }

  removeSubRecipe($event: MouseEvent) {
    $event.stopPropagation();
    this.removeRecipe.emit();
  }
}
