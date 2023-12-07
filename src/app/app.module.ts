import {APP_INITIALIZER, isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CreatePageComponent} from './pages/create-page/create-page.component';
import {AppLayoutComponent} from './components/ui/app-layout/app-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {CreateFormComponent} from './components/create/create-form/create-form.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {IngredientFormComponent} from './components/create/ingredient-form/ingredient-form.component';
import {IngredientTableComponent} from './components/create/ingredient-table/ingredient-table.component';
import {
  SubRecipeCreateDialogComponent
} from './components/create/sub-recipe/sub-recipe-create-dialog/sub-recipe-create-dialog.component';
import {
  SubRecipeAccordionComponent
} from './components/create/sub-recipe/sub-recipe-accordion/sub-recipe-accordion.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {SubRecipePanelComponent} from './components/create/sub-recipe/sub-recipe-panel/sub-recipe-panel.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxEditorModule} from 'ngx-editor';
import {MethodEditorComponent} from './components/create/method-editor/method-editor.component';
import {ExtrasFormComponent} from './components/create/extras-form/extras-form.component';
import {StoreModule} from '@ngrx/store';
import {AutoChipsComponent} from './components/ui/auto-chips/auto-chips.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {recipeFormReducer} from './store/recipeForm/recipeForm.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {EffectsModule} from '@ngrx/effects';
import RecipeFormEffects from './store/recipeForm/recipeForm.effects';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {ToastrModule} from 'ngx-toastr';
import {DisplayPageComponent} from './pages/display-page/display-page.component';
import RecipeEffects from './store/recipe/recipe.effects';
import {recipeReducer} from './store/recipe/recipe.reducer';
import {RecipeListComponent} from './components/display/recipe-list/recipe-list.component';
import {RecipePanelComponent} from './components/display/recipe-panel/recipe-panel.component';
import {EllipsisSlicePipe} from './pipes/ellipsis-slice.pipe';
import {SubRecipeComponent} from './components/shared/sub-recipe/sub-recipe.component';
import {IngredientDisplayPipe} from './pipes/ingredientDisplay.pipe';
import {RecipeFilterComponent} from './components/display/recipe-filter/recipe-filter.component';
import {AllergensSelectComponent} from './components/shared/allergens-select/allergens-select.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ConfirmDialogComponent} from './components/ui/confim-dialog/confirm-dialog.component';
import {DetailPageComponent} from './pages/detail-page/detail-page.component';
import {RecipeDetailComponent} from './components/detail/recipe-detail/recipe-detail.component';
import {AmountPortionFormComponent} from './components/detail/amount-portion-form/amount-portion-form.component';
import {HashLocationStrategy, LocationStrategy, NgOptimizedImage,} from '@angular/common';
import {IngredientListComponent} from './components/shared/ingredient-list/ingredient-list.component';
import {MethodDetailComponent} from './components/detail/method-detail/method-detail.component';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import {ExtraInfoComponent} from './components/detail/extra-info/extra-info.component';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {MatMenuModule} from '@angular/material/menu';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {authReducer} from './store/auth/auth.reducers';
import AuthEffects from './store/auth/auth.effects';
import {AllergenIconComponent} from './components/ui/allergen-icon/allergen-icon.component';
import {ProfileAvatarComponent} from './components/ui/profile-avatar/profile-avatar.component';
import {NgxPrintModule} from 'ngx-print';
import {ServiceWorkerModule} from '@angular/service-worker';
import {PromptComponent} from './components/ui/prompt/prompt.component';
import {PwaInstallService} from "./services/pwa-install.service";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {FavoritesEffects} from "./store/favorites/favorites.effects";
import {favoritesReducer} from "./store/favorites/favorites.reducer";
import { StarToggleComponent } from './components/ui/star-toggle/star-toggle.component';
import { PasswordForgotComponent } from './pages/password-forgot/password-forgot.component';
import { ForgotDialogComponent } from './components/forgot-dialog/forgot-dialog.component';

const firebaseConfig = {
  projectId: import.meta.env['NG_APP_FIREBASE_PROJECT_ID'],
  appId: import.meta.env['NG_APP_FIREBASE_APP_ID'],
  storageBucket: import.meta.env['NG_APP_FIREBASE_STORAGE_BUCKET'],
  apiKey: import.meta.env['NG_APP_FIREBASE_API_KEY'],
  authDomain: import.meta.env['NG_APP_FIREBASE_AUTH_DOMAIN'],
  messagingSenderId: import.meta.env['NG_APP_FIREBASE_MESSAGING_SENDER_ID'],
};


const initializer = (pwaService: PwaInstallService) => () => pwaService.initPwaPrompt();

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
    RecipeFilterComponent,
    AllergensSelectComponent,
    ConfirmDialogComponent,
    DetailPageComponent,
    RecipeDetailComponent,
    AmountPortionFormComponent,
    IngredientListComponent,
    MethodDetailComponent,
    ExtraInfoComponent,
    LoginPageComponent,
    SafeHtmlPipe,
    AllergenIconComponent,
    ProfileAvatarComponent,
    PromptComponent,
    StarToggleComponent,
    PasswordForgotComponent,
    ForgotDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    RouterOutlet,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        underline: 'Underline',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify',
        text_color: 'Text Color',
        background_color: 'Background Color',
      },
    }),
    ToastrModule.forRoot({
      timeOut: 10000,
    }),
    NgxPrintModule,

    // Angular Material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatBottomSheetModule,

    //ngrx
    StoreModule.forRoot(
      {
        recipeForm: recipeFormReducer,
        recipes: recipeReducer,
        auth: authReducer,
        favorites: favoritesReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([RecipeFormEffects, RecipeEffects, AuthEffects, FavoritesEffects]),

    //firebase
    provideFirebaseApp(() => initializeApp({...firebaseConfig})),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    MatMenuModule,
    NgOptimizedImage,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaInstallService], multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
