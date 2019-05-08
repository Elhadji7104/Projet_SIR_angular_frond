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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
// materiel
import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {MatDialogModule} from '@angular/material';
import {
  PasswordModule,
  PanelModule,
  DialogModule
} from 'primeng/primeng';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NavBarreComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SondageComponent,
    ParticipantSondageComponent,
    UtilisateurComponent,
    DialogOverviewExampleDialogComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    TabViewModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatTableModule,
    ButtonModule,
    TableModule,
    MatDialogModule,
    PasswordModule,
    PanelModule,
    DialogModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent},
      {
        path: 'home',
        component: HomeComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
