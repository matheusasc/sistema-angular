import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PainelComponent } from './painel/painel.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {AuthService} from "./painel/auth.service";
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import {RouterLink, RouterOutlet, RouterModule} from "@angular/router";
import {ROUTES} from "./app-routing.module";
import { TelaCcafComponent } from './tela-ccaf/tela-ccaf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PainelComponent,
    HomeComponent,
    RodapeComponent,
    LoginComponent,
    TelaCcafComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
