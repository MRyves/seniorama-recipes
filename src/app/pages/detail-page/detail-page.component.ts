import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import RecipeModel from "../../models/Recipe.model";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPageComponent {

  recipe$ = this.activatedRoute.data as Observable<RecipeModel>;

  constructor(private activatedRoute: ActivatedRoute) {
  }


}
