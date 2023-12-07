import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreatePageComponent} from "./pages/create-page/create-page.component";
import {DisplayPageComponent} from "./pages/display-page/display-page.component";
import {recipeResolver} from "./pages/detail-page/recipe-resolver";
import {DetailPageComponent} from "./pages/detail-page/detail-page.component";
import {editResolver} from "./pages/edit-page/edit-resolver";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AuthGuard} from "@angular/fire/auth-guard";
import {PasswordForgotComponent} from "./pages/password-forgot/password-forgot.component";

const routes: Routes = [
  {
    path: '',
    component: DisplayPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'create',
    component: CreatePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:uid',
    component: CreatePageComponent,
    canActivate: [AuthGuard],
    resolve: {recipeUid: editResolver}
  },
  {
    path: 'details/:uid',
    resolve: {recipeData: recipeResolver},
    component: DetailPageComponent,
  },
  {
    path: 'forgot',
    component: PasswordForgotComponent,
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
