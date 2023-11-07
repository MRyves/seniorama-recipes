import {NgModule} from '@angular/core';
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
import {IngredientTableComponent} from './components/create/ingredient-table/ingredient-table.component';
import {
  SubRecipeCreateDialogComponent
} from './components/create/sub-recipe/sub-recipe-create-dialog/sub-recipe-create-dialog.component';
import {SubRecipeAccordionComponent} from './components/create/sub-recipe/sub-recipe-accordion/sub-recipe-accordion.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {SubRecipePanelComponent} from './components/create/sub-recipe/sub-recipe-panel/sub-recipe-panel.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTabsModule} from "@angular/material/tabs";
import {NgxEditorModule} from "ngx-editor";
import { MethodEditorComponent } from './components/create/method-editor/method-editor.component';

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
    MethodEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    RouterOutlet,
    NgxEditorModule,

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
