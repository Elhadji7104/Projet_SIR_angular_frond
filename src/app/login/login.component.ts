import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SondageService} from '../services/sondage.service';
import {UtilisateurService} from '../services/utilisateur.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;

  user = {
    mail: '',
    mdp: '',
  };
  userLogin = {
    mail: '',
    mdp: '',
  };
  constructor(private router: Router , private utilisateurService: UtilisateurService) { }
  ngOnInit() {
  }
  loginUser() {
    this.utilisateurService.login(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this.userLogin = this.user;
          console.log('user', JSON.stringify(this.userLogin)) ;
          this.router.navigate(['home/' + this.userLogin.mail]);
          // this.router.navigate([this.returnUrl]);
        },
        error => {
         // this.alertService.error(error);
          this.loading = false;
        });
  }

}
