import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import RecipeModel from '../../../models/Recipe.model';
import { AmountPortionFormType } from '../amount-portion-form/amount-portion-form.component';
import {FavoriteModel} from "../../../models/Favorite.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailComponent {
  @Input({ required: true })
  isLoggedIn = false;

  @Input({ required: true })
  recipe!: RecipeModel;

  @Input({required: true})
  isFav = false;

  @Output()
  methodChanged = new EventEmitter<{ uid: string; method: string }>();

  @Output()
  editRecipeClick = new EventEmitter<RecipeModel>();

  @Output()
  favoriteToggle = new EventEmitter<{newValue: boolean} & FavoriteModel>();

  amountFactor = 1;
  perPortionFactor = 1;
  factor = 1;

  amountChanged(change: Partial<AmountPortionFormType>) {
    this.amountFactor = change.amount
      ? change.amount / this.recipe.amount
      : this.amountFactor;
    this.perPortionFactor = change.perPortion
      ? change.perPortion / this.recipe.gramPerPortion
      : this.perPortionFactor;

    this.factor = this.amountFactor * this.perPortionFactor;
  }

  onEdit(recipe: RecipeModel) {
    if (this.isLoggedIn) {
      this.editRecipeClick.emit(recipe);
    }
  }

  onMethodChanged(params: { uid: string; method: string }) {
    if (this.isLoggedIn) {
      this.methodChanged.emit(params);
    }
  }

}
