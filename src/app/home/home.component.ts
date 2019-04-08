import { Component, OnInit } from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
import {SondageService} from '../services/sondage.service';
import {ActivatedRoute} from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  index = 0;
  user = {
    nom: '',
    prenom: '',
    mail: '',
    mdp: '',
  };
  login;
  sondage = {
    lienWeb: '',
  };
  mail: '';
  sondagesCree;
  sondagePost;
  sondageEncours;
  constructor(private router: ActivatedRoute, private sondageService: SondageService ) { }
  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
  }
  ngOnInit() {
    this.login = 'fallgora.egf@gmail.com';
    this.sondageService.getAllSondageByUser(this.login).subscribe(data => {
      this.sondagesCree = data;
      console.log('data' + JSON.stringify(data));
    });
    this.sondageService.getAllSondage().subscribe(data => {
      this.sondageEncours = data;
    });
  }
  saveSondage(mail: any , sondage: any) {
     this.sondageService.create(this.mail, this.sondage).subscribe(data => {
     this.sondagePost = data;
     console.log(this.sondage);
     console.log('data' , JSON.stringify(data));
    });
  }
  getlisteSondagebyUser(mail: any) {
    this.sondageService.getAllSondageByUser(mail).subscribe(data => {
      this.sondagesCree = data;
      console.log('data' + JSON.stringify(data));
    });
  }
}
