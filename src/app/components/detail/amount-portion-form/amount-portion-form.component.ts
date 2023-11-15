import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription, debounceTime} from "rxjs";


export type AmountPortionFormType = {
  amount: Nullable<number>,
  perPortion: Nullable<number>
};

@Component({
  selector: 'app-amount-portion-form',
  templateUrl: './amount-portion-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmountPortionFormComponent implements OnInit, OnDestroy {

  @Input({required: true})
  set amount(value: number){
    this.formGroup.controls.amount.setValue(value);
  }

  @Input({required: true})
  set perPortion(value: number){
    this.formGroup.controls.perPortion.setValue(value)
  }

  @Output()
  amountChanged = new EventEmitter<Partial<AmountPortionFormType>>();

  formGroup = new FormGroup({
    amount: new FormControl(0, [Validators.required, Validators.min(1)]),
    perPortion: new FormControl(0, [Validators.required, Validators.min(1)])
  });

  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.formGroup.valueChanges
      .pipe(
        debounceTime(200),
      )
      .subscribe(next => {
        if(next.amount || next.perPortion){
          this.amountChanged.emit(next);
        }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
