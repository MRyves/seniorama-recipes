import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Allergen} from "../../../models/Recipe.model";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const ALL_ALLERGENS: Allergen[] = [
  "Eier",
  "Erdnüsse",
  "Fische",
  "Gluten",
  "Hausgrillpulver",
  "Krebstiere",
  "Laktose",
  "Lupinen",
  "Nüsse",
  "Sellerie",
  "Senf",
  "Sesam",
  "Soja",
  "Sulfite",
  "Weichtiere"];

@Component({
  selector: 'app-allergens-select',
  templateUrl: './allergens-select.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AllergensSelectComponent
    }
  ]
})
export class AllergensSelectComponent implements ControlValueAccessor {

  readonly allAllergens: Allergen[] = ALL_ALLERGENS;

  @Input()
  subscriptSizing: 'fixed' | 'dynamic' = 'fixed';

  @Input()
  appearance: 'fill' | 'outline' = 'fill';

  @Input()
  allergens: Allergen[] = [];
  @Output()
  allergensChange = new EventEmitter<Allergen[]>()

  onChange = (allergens: Allergen[]) => {
  }
  onTouched = () => {
  };
  touched = false;
  disabled = false;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(allergens: Allergen[]): void {
    this.allergens = allergens;
  }

  updateValue(allergens: Allergen[]) {
    this.onChange(allergens);
    this.allergensChange.emit(allergens);
  }
}
