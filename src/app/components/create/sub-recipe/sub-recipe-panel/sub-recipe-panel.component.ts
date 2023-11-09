import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {SubRecipeModel} from "../../../../models/SubRecipe.model";

@Component({
  selector: 'app-sub-recipe-panel',
  templateUrl: './sub-recipe-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubRecipePanelComponent {

  @Output()
  removeRecipe = new EventEmitter();

  @Input({required: true})
  subRecipe!: SubRecipeModel;

  removeSubRecipe($event: MouseEvent) {
    $event.stopPropagation();
    this.removeRecipe.emit();
  }
}
