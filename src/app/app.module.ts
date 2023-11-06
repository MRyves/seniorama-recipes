import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { AppLayoutComponent } from './components/ui/app-layout/app-layout.component';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import { CreateFormComponent } from './components/create/create-form/create-form.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import { IngredientFormComponent } from './components/create/ingredient-form/ingredient-form.component';
import { IngredientTableComponent } from './components/create/ingredient-table/ingredient-table.component';
import { SubRecipeCreateDialogComponent } from './components/create/sub-recipe-create-dialog/sub-recipe-create-dialog.component';
import { SubRecipeAccordionComponent } from './components/create/sub-recipe-accordion/sub-recipe-accordion.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { SubRecipePanelComponent } from './components/create/sub-recipe-panel/sub-recipe-panel.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

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
    SubRecipePanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterLink,
    MatCardModule,
    RouterOutlet,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
