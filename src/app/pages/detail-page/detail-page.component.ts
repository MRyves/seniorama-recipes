import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {filter, map, Observable, switchMap} from "rxjs";
import RecipeModel from "../../models/Recipe.model";
import {RecipeService} from "../../services/recipe.service";
import {AppState} from "../../store/store";
import {Store} from "@ngrx/store";
import {RecipeFormActions} from "../../store/recipeForm/recipeForm.actions";
import {TitleService} from "../../services/title.service";
import {fromAuth} from "../../store/auth/auth.selectors";
import {fromFavorites} from "../../store/favorites/favorites.reducer";
import {FavoritesService} from "../../services/favorites.service";
import {FavoriteModel} from "../../models/Favorite.model";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPageComponent implements OnInit {

  isLoggedIn$ = this.store.select(fromAuth.isLoggedIn);
  recipe$ = this.activatedRoute.data.pipe(map(data => data['recipeData'])) as Observable<RecipeModel>;
  isFavorite$ = this.recipe$.pipe(filter(Boolean), switchMap(({uid}) => this.store.select(fromFavorites.selectIsFavorite(uid!))));

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private titleService: TitleService,
              private recipeService: RecipeService,
              private favoriteService: FavoritesService,
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

  toggleFavorite({newValue, uid, name}: { newValue: boolean, uid: string, name: string }) {
    newValue ?
      this.favoriteService.add({uid, name} as FavoriteModel) :
      this.favoriteService.delete(uid)
  }
}
