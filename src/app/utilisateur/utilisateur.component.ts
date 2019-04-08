import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from '../services/utilisateur.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  public postData;
  // utilisateurService: UtilisateurService;
  constructor(public url: HttpClient, private utilisateurService: UtilisateurService) { }

  ngOnInit() {
  }
}
