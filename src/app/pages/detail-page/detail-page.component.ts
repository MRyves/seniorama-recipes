import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable} from "rxjs";
import RecipeModel from "../../models/Recipe.model";
import {RecipeService} from "../../services/recipe.service";
import {AppState} from "../../store/store";
import {Store} from "@ngrx/store";
import {RecipeActions} from "../../store/recipe/recipe.actions";
import {RecipeFormActions} from "../../store/recipeForm/recipeForm.actions";
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPageComponent implements OnInit{

  recipe$ = this.activatedRoute.data.pipe(map(data => data['recipeData'])) as Observable<RecipeModel>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private titleService: TitleService,
              private recipeService: RecipeService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.titleService.setTitle('');
  }

  updateRecipe(changes: Partial<RecipeModel>) {
    if (changes.uid) {
      this.recipeService.update(changes.uid, changes);
    }
  }

  editRecipe(recipe: RecipeModel) {
    this.store.dispatch(RecipeFormActions.editRecipe({recipe}));
    this.router.navigate(['edit', recipe.uid])
  }
}
