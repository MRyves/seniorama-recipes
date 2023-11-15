import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import RecipeModel from "../../../models/Recipe.model";
import {AmountPortionFormType} from "../amount-portion-form/amount-portion-form.component";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailComponent {

  @Input({required: true})
  recipe!: RecipeModel

  amountFactor = 1;
  perPortionFactor = 1;
  factor = 1;

  amountChanged(change: Partial<AmountPortionFormType>) {
    this.amountFactor = change.amount ? change.amount / this.recipe.amount : this.amountFactor;
    this.perPortionFactor = change.perPortion ? change.perPortion / this.recipe.gramPerPortion : this.perPortionFactor;

    this.factor = this.amountFactor * this.perPortionFactor;
  }
}
