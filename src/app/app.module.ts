import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CreatePageComponent} from './pages/create-page/create-page.component';
import {AppLayoutComponent} from './components/ui/app-layout/app-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {CreateFormComponent} from './components/create/create-form/create-form.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {IngredientFormComponent} from './components/create/ingredient-form/ingredient-form.component';
import {IngredientTableComponent} from './components/shared/ingredient-table/ingredient-table.component';
import {
  SubRecipeCreateDialogComponent
} from './components/create/sub-recipe/sub-recipe-create-dialog/sub-recipe-create-dialog.component';
import {
  SubRecipeAccordionComponent
} from './components/create/sub-recipe/sub-recipe-accordion/sub-recipe-accordion.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {SubRecipePanelComponent} from './components/create/sub-recipe/sub-recipe-panel/sub-recipe-panel.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTabsModule} from "@angular/material/tabs";
import {NgxEditorModule} from "ngx-editor";
import {MethodEditorComponent} from './components/create/method-editor/method-editor.component';
import {ExtrasFormComponent} from './components/create/extras-form/extras-form.component';
import {StoreModule} from '@ngrx/store';
import {AutoChipsComponent} from "./components/ui/auto-chips/auto-chips.component";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSelectModule} from "@angular/material/select";
import {recipeFormReducer} from "./store/recipeForm/recipeForm.reducer";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {EffectsModule} from '@ngrx/effects';
import {environment} from "../environments/environment";
import RecipeFormEffects from "./store/recipeForm/recipeForm.effects";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {ToastrModule} from "ngx-toastr";
import { DisplayPageComponent } from './pages/display-page/display-page.component';
import RecipeEffects from "./store/recipe/recipe.effects";
import {recipeReducer} from "./store/recipe/recipe.reducer";
import { RecipeListComponent } from './components/display/recipe-list/recipe-list.component';
import { RecipePanelComponent } from './components/display/recipe-panel/recipe-panel.component';
import { EllipsisSlicePipe } from './pipes/ellipsis-slice.pipe';
import { SubRecipeComponent } from './components/display/sub-recipe/sub-recipe.component';
import { IngredientDisplayPipe } from './pipes/ingredientDisplay.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreatePageComponent,
    AppLayoutComponent,
    CreateFormComponent,
    IngredientFormComponent,
    IngredientTableComponent,
    SubRecipeCreateDialogComponent,
    SubRecipeAccordionComponent,
    SubRecipePanelComponent,
    MethodEditorComponent,
    ExtrasFormComponent,
    AutoChipsComponent,
    DisplayPageComponent,
    RecipeListComponent,
    RecipePanelComponent,
    EllipsisSlicePipe,
    SubRecipeComponent,
    IngredientDisplayPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    RouterOutlet,
    NgxEditorModule,
    ToastrModule.forRoot({
      timeOut: 10000,
    }),


    // Angular Material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSelectModule,

    //ngrx
    StoreModule.forRoot({recipeForm: recipeFormReducer, recipes: recipeReducer}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([RecipeFormEffects, RecipeEffects]),

    //firebase
    provideFirebaseApp(() => initializeApp({...environment.firebase})),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
