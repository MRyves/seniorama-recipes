import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SubRecipeModel} from "../../../models/SubRecipe.model";

@Component({
  selector: 'app-sub-recipe',
  templateUrl: './sub-recipe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubRecipeComponent {

  @Input()
  subRecipe!: SubRecipeModel;

}
