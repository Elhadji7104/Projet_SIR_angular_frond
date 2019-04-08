import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarreComponent } from './nav-barre/nav-barre.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import { SondageComponent } from './sondage/sondage.component';
import {HttpClientModule} from '@angular/common/http';
import { ParticipantSondageComponent } from './participant-sondage/participant-sondage.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarreComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SondageComponent,
    ParticipantSondageComponent,
    UtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    TabViewModule,
    InputTextModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
