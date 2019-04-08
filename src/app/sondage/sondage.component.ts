import { Component, OnInit } from '@angular/core';
import {SondageService} from '../services/sondage.service';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {
  sondages;
  constructor(private sondageService: SondageService ) { }

  ngOnInit() {
    this.sondageService.getAllSondage().subscribe((data) => {
      this.sondages = data;
      console.log('data' + JSON.stringify(data));
    });
  }
}
