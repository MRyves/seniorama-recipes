import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import RecipeModel from "../../../models/Recipe.model";

@Component({
  selector: 'app-recipe-panel',
  templateUrl: './recipe-panel.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipePanelComponent {
  @Input({required: true})
  recipe!: RecipeModel;

  @Output()
  deleteRecipe = new EventEmitter<string>();
}
