import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {RecipeFilter} from "../../../models/RecipeFilter.model";
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime, map, Subscription} from "rxjs";


@Component({
  selector: 'app-recipe-filter',
  templateUrl: './recipe-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class RecipeFilterComponent implements OnInit, OnDestroy {

  @Output()
  filterChange = new EventEmitter<RecipeFilter>();

  filterGroup = new FormGroup({
    name: new FormControl(''),
    tags: new FormControl([] as string[]),
  });

  subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.filterGroup.valueChanges.pipe(
      debounceTime(500),
      map(({name, tags}) => ({
        name,
        tags,
      } as RecipeFilter))
    ).subscribe(value => this.filterChange.emit(value));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
