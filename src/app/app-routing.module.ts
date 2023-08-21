import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {PainelComponent} from "./painel/painel.component";

export const ROUTES: Routes = [
  {path: '',
  title: 'matheus',
  pathMatch: 'full',
  redirectTo: 'login'},

  {path: 'home', component: PainelComponent},
  {path: 'login', component: LoginComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
