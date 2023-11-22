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
  isLoggedIn: boolean = false;

  @Input({required: true})
  recipe!: RecipeModel;

  @Output()
  deleteRecipe = new EventEmitter<string>();

  onDeleteRecipe(uid: string){
    if(this.isLoggedIn){
      this.deleteRecipe.emit(uid);
    }
  }
}
