import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeIngredientModel} from "../../../models/RecipeIngredient.model";
import {MatDialog} from "@angular/material/dialog";
import {
  SubRecipeCreateDialogComponent
} from "../sub-recipe/sub-recipe-create-dialog/sub-recipe-create-dialog.component";
import RecipeModel, {Allergen} from "../../../models/Recipe.model";

const ALL_TAGS = [
  'Vorspeisen',
  'Salate',
  'Suppen',
  'Beilagen',
  'Fleisch',
  'Fisch',
  'Vegi',
  'Pasta',
  'Dessert',
  'Abendessen',
];

const ALL_ALLERGENS: Allergen[] = [
  "Eier",
  "Erdnüsse",
  "Fische",
  "Gluten",
  "Hausgrillpulver",
  "Krebstiere",
  "Laktose",
  "Lupinen",
  "Nüsse",
  "Sellerie",
  "Senf",
  "Sesam",
  "Soja",
  "Sulfite",
  "Weichtiere"];

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: [
    './create-form.component.css'
  ],
})
export class CreateFormComponent {

  @Input({required: true})
  recipe!: RecipeModel;

  @Output()
  recipeChange = new EventEmitter<Partial<RecipeModel>>();

  readonly allTags = ALL_TAGS;
  readonly allAllergens: Allergen[] = ALL_ALLERGENS;

  constructor(public dialog: MatDialog) {
  }

  addIngredient(ingredient: RecipeIngredientModel) {
    this.recipeChange.emit({ingredients: [...this.recipe.ingredients, ingredient]});
  }

  removeIngredient(index: number) {
    if (this.recipe.ingredients.length <= 1) {
      this.recipeChange.emit({ingredients: []});
      return;
    }
    this.recipeChange.emit({ingredients: [...this.recipe.ingredients.filter((_, i) => i !== index)]});
  }


  openSubRecipeDialog() {
    const dialogRef = this.dialog.open(SubRecipeCreateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recipeChange.emit({subRecipe: [...this.recipe.subRecipe, result]})
      }
    })
  }

  removeSubRecipe(index: number) {
    if (this.recipe.subRecipe.length <= 1) {
      this.recipeChange.emit({subRecipe: []});
    } else {
      this.recipeChange.emit({
        subRecipe:
          [...this.recipe.subRecipe.filter((_, i) => i !== index)]
      });
    }
  }

  addTag(tag: string) {
    this.recipeChange.emit({tags: [...this.recipe.tags, tag]});
  }

  removeTage(tag: string) {
    if (this.recipe.tags.length <= 1) {
      this.recipeChange.emit({tags: []});
      return;
    }
    this.recipeChange.emit({tags: [...this.recipe.tags.filter(t => t !== tag)]});
  }

  update(key: string, value: any) {
    this.recipeChange.emit({[key]: value});
  }
}
