import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreatePageComponent} from "./pages/create-page/create-page.component";

const routes: Routes = [
  { path: 'create', component: CreatePageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ]
})
export class AppRoutingModule { }
