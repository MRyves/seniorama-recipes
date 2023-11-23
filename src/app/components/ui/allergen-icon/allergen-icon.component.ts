import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Allergen} from "../../../models/Recipe.model";

@Component({
  selector: 'app-allergen-icon',
  templateUrl: './allergen-icon.component.html',
  styleUrls: ['./allergen-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllergenIconComponent {

  @Input({required: true})
  allergen!: Allergen;

  get imgSource() {
    return `/assets/allergens/${this.allergen}.svg`;
  }
}
