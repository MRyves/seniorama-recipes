import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreatePageComponent} from "./pages/create-page/create-page.component";
import {DisplayPageComponent} from "./pages/display-page/display-page.component";
import {recipeResolver} from "./pages/detail-page/recipe-resolver";
import {DetailPageComponent} from "./pages/detail-page/detail-page.component";

const routes: Routes = [
  {path: '', component: DisplayPageComponent},
  {path: 'create', component: CreatePageComponent},
  {
    path: 'details/:uid',
    resolve: { recipeData: recipeResolver },
    component: DetailPageComponent,
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ]
})
export class AppRoutingModule {
}
