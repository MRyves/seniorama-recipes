import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import RecipeModel from "../../../models/Recipe.model";

@Component({
  selector: 'app-extras-form',
  templateUrl: './extras-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtrasFormComponent {

  @Input({required: true})
  recipe!: RecipeModel;

  @Output()
  recipeChange = new EventEmitter<Partial<RecipeModel>>();

  update(key: string, value: string){
    this.recipeChange.emit({[key]: value});
  }
}
