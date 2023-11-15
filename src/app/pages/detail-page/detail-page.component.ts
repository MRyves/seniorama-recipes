import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import RecipeModel from "../../models/Recipe.model";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPageComponent {

  recipe$ = this.activatedRoute.data.pipe(map(data => data['recipeData'])) as Observable<RecipeModel>;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
  }



  updateRecipe(changes: Partial<RecipeModel>) {
    if(changes.uid){
      this.recipeService.update(changes.uid, changes);
    }
  }
}
