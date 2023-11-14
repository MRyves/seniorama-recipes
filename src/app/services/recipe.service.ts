import {Injectable} from '@angular/core';
import RecipeModel from "../models/Recipe.model";
import {RecipeFormState} from "../store/recipeForm/recipeForm.reducer";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ToastrService} from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeCollection = this.ngf.collection('recipes');

  constructor(private ngf: AngularFirestore, private toast: ToastrService) {
  }

  async save(recipeForm: RecipeFormState) {
    try {
      const docRef = recipeForm.isEditMode ?
        await this.saveRecipe(recipeForm.recipe) :
        await this.saveNewRecipe(recipeForm.recipe);
      this.toast.success(`url/recipe/${docRef.id}`, 'Neues Rezept erstellt!');
    } catch (e) {
      this.toast.error("Fehler beim speichern!");
      console.error("Failed to save new recipe: ", e);
    }
  }

  async delete(recipeUid: string) {
    try {
      await this.recipeCollection.doc(recipeUid).delete();
      this.toast.success('Rezept gelöscht!')
    } catch (e) {
      this.toast.error("Fehler beim löschen des Rezeptes");
      console.error("Failed to delete recipe: ", e);
    }
  }

  private saveNewRecipe(recipe: RecipeModel) {
    return this.recipeCollection.add(recipe);
  }

  private saveRecipe(recipe: RecipeModel) {
    return Promise.reject("Method not implemented");
  }
}
