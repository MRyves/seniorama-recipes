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
      const docref = recipeForm.isEditMode ?
        await this.saveRecipe(recipeForm.recipe) :
        await this.saveNewRecipe(recipeForm.recipe);
      this.toast.success(`url/recipe/${docref.id}`, 'Successfully created new recipe');
    } catch (e) {
      throw new Error("Failed to save recipe", {cause: e});
    }
  }

  private saveNewRecipe(recipe: RecipeModel) {
    return this.recipeCollection.add(recipe);
  }

  private saveRecipe(recipe: RecipeModel) {
    return Promise.reject("Method not implemented");
  }
}
