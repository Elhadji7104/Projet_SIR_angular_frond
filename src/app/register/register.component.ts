import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from '../services/utilisateur.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {SondageService} from '../services/sondage.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSaving: boolean;
  name: string;
  user = {
    nom: '',
    prenom: '',
    mail: '',
    mdp: '',
  };
  constructor(private router: ActivatedRoute, public url: HttpClient, private utilisateurService: UtilisateurService ) {}
  public postData;

  ngOnInit() {}
  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }
  previousState() {
    window.history.back();
  }

  save(user: any) {
    // const user = { nom: 'Anil', prenom: 'India', mail : 'fall@fall', mdp : 'passer' };
    console.log(this.user);
    console.log('data' + JSON.stringify(user));
    return this.utilisateurService.create(this.user).subscribe((data) => {
        this.postData = data;
        console.log('data' + JSON.stringify(data));
      });
  }
  /*
  public adduser() {
    const user = { nom: 'Anil', prenom: 'India', mail : 'fall@fallzzz', mdp : 'passer' };
    this.utilisateurService.create(user)
      .subscribe(data => {
        this.postData = data;
        console.log(this.postData);
      });
  }**/
}
