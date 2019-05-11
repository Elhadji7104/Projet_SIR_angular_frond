import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {SondageComponent} from './sondage/sondage.component';
import {ParticipantSondageComponent} from './participant-sondage/participant-sondage.component';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home/:userLogin', component: HomeComponent},
  {path: 'sondages', component: SondageComponent},
  {path: 'sondages/allParticipants/:id', component: ParticipantSondageComponent},
  {path: 'sondages/participer/:id', component: HomeComponent},
  {path: 'sondages/allsondageByUse/:login', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

