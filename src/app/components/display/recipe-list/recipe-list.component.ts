import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import RecipeModel from "../../../models/Recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent {

  @Input({required: true})
  recipes: RecipeModel[] = [];

}
