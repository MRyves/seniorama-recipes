import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {Allergen} from "../../../models/Recipe.model";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-allergen-icon',
  templateUrl: './allergen-icon.component.html',
  styleUrls: ['./allergen-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllergenIconComponent {

  @Input({required: true})
  allergen!: Allergen;

  @Input()
  showTooltipOnClick = false;

  @Input()
  showText = false;

  @ViewChild('tooltip')
  tooltip?: MatTooltip;

  get imgSource() {
    return `/assets/allergens/${this.allergen}.svg`;
  }

  onClick() {
    if (this.showTooltipOnClick) {
      this.tooltip!.toggle();
    }
  }
}
