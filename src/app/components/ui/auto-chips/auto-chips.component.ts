import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatInput } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';
import {MatFormFieldAppearance, SubscriptSizing} from "@angular/material/form-field";

@Component({
  selector: 'app-auto-chips',
  templateUrl: './auto-chips.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoChipsComponent {
  @ViewChild('chipInput', { static: true })
  chipInput!: MatInput;

  @Input()
  formFieldClass = '';

  @Input()
  placeholder = 'Select Chips';

  @Input({ required: true })
  selectedChips!: string[];

  @Input({ required: true })
  allChips!: string[] | null;

  @Input()
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @Input()
  subscriptionSizing: SubscriptSizing = 'fixed';

  @Input()
  appearance: MatFormFieldAppearance = 'fill';

  @Output()
  chipAdded = new EventEmitter<string>();

  @Output()
  chipRemoved = new EventEmitter<string>();

  chipControl = new FormControl('');

  filteredChips$: Observable<string[]>;

  constructor() {
    this.filteredChips$ = this.chipControl.valueChanges.pipe(
      startWith(null),
      map(input => this._filter(input))
    );
  }

  remove(chip: string) {
    this.chipRemoved.emit(chip);
  }

  add(event: MatChipInputEvent) {
    const value = (this.chipControl.value || '').trim();
    if (value) {
      this.chipAdded.emit(value);
    }

    event.chipInput?.clear();
    this.chipControl.setValue(null);
  }

  selected(event: MatAutocompleteSelectedEvent) {
    this.chipInput.value = '';
    this.chipControl.setValue(null);
    this.chipAdded.emit(event.option.viewValue);
  }

  private _filter(search: string | null): string[] {
    if (search && this.allChips) {
      const searchLower = search.toLowerCase();
      return this.allChips.filter(c => c.toLowerCase().includes(searchLower));
    }
    return this.allChips || [];
  }
}
