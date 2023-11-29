import { Injectable } from '@angular/core';
import RecipeModel from '../models/Recipe.model';
import { RecipeFormState } from '../store/recipeForm/recipeForm.reducer';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeCollection = this.ngf.collection('recipes');

  constructor(
    private ngf: AngularFirestore,
    private toast: ToastrService,
    private router: Router
  ) {}

  async save(recipeForm: RecipeFormState) {
    try {
      recipeForm.isEditMode
        ? await this.saveRecipe(recipeForm.recipe)
        : await this.saveNewRecipe(recipeForm.recipe);
    } catch (e) {
      this.toast.error('Fehler beim speichern!');
      console.error('Failed to save new recipe: ', e);
    }
  }

  async delete(recipeUid: string) {
    try {
      await this.recipeCollection.doc(recipeUid).delete();
      this.toast.success('Rezept gelöscht!');
    } catch (e) {
      this.toast.error('Fehler beim löschen des Rezeptes');
      console.error('Failed to delete recipe: ', e);
    }
  }

  async update(uid: string, update: Partial<RecipeModel>) {
    try {
      await this.recipeCollection.doc(uid).update(update);
      this.toast.success('Rezept angepasst!');
    } catch (e) {
      this.toast.error('Fehler beim speichern des Rezeptes');
      console.error('Failed to update a recipe: ', e);
    }
  }

  private saveNewRecipe(recipe: RecipeModel) {
    return this.recipeCollection.add(recipe).then(docRef =>
      this.toast
        .success(`<a>${recipe.name}</a>`, 'Neues Rezept erstellt!', {
          enableHtml: true,
        })
        .onTap.pipe(take(1))
        .subscribe(() => {
          return this.router.navigate(['details', docRef.id]);
        })
    );
  }

  private saveRecipe(recipe: RecipeModel) {
    return this.recipeCollection
      .doc(recipe.uid)
      .update(recipe)
      .then(() =>
        this.toast
          .success(`<a>${recipe.name}</a>`, 'Erfolgreich angepasst!', {
            enableHtml: true,
          })
          .onTap.pipe(take(1))
          .subscribe(() => {
            return this.router.navigate(['details', recipe.uid]);
          })
      );
  }
}
