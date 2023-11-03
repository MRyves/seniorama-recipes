import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SubRecipe} from "../../../models/SubRecipe";

@Component({
  selector: 'app-sub-recipe-panel',
  templateUrl: './sub-recipe-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubRecipePanelComponent {
  @Input({required: true})
  subRecipe!: SubRecipe;

  removeIngredient(index: number) {

  }
}
