import { Pipe, PipeTransform } from '@angular/core';
import {RecipeIngredientModel} from "../models/RecipeIngredient.model";

@Pipe({
  name: 'ingredientDisplay'
})
export class IngredientDisplayPipe implements PipeTransform {

  transform(value: RecipeIngredientModel, factor = 1): string {
    return !!value.amount ?
      `${value.amount * factor} ${value.unit} ${value.name}` :
      `${value.name}`
  }

}
