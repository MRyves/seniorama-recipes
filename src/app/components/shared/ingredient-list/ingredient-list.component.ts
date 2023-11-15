import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RecipeIngredientModel} from "../../../models/RecipeIngredient.model";
import {SubRecipeModel} from "../../../models/SubRecipe.model";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientListComponent {

  @Input({required: true})
  ingredients: RecipeIngredientModel[] = [];

  @Input()
  subRecipes: SubRecipeModel[] = [];

  @Input()
  amountFactor = 1;

}
