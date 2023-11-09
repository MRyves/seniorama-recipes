import { Pipe, PipeTransform } from '@angular/core';
import {RecipeIngredientModel} from "../models/RecipeIngredient.model";

@Pipe({
  name: 'ingredientDisplay'
})
export class IngredientDisplayPipe implements PipeTransform {

  transform(value: RecipeIngredientModel, ...args: unknown[]): string {
    return `${value.amount} ${value.unit} ${value.name}`;
  }

}
