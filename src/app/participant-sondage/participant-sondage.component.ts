import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SondageComponent} from '../sondage/sondage.component';
import {SondageService} from '../services/sondage.service';

@Component({
  selector: 'app-participant-sondage',
  templateUrl: './participant-sondage.component.html',
  styleUrls: ['./participant-sondage.component.css']
})
export class ParticipantSondageComponent implements OnInit {

  participants;
  constructor(private router: ActivatedRoute, private sondageService: SondageService) {
    let id: string;
    id = router.snapshot.paramMap.get('id');
    sondageService.getAllParticipantsSondage(Number(id)).subscribe((mysondage) => {
      this.participants = mysondage;
      console.log('liste de reponse ' + JSON.stringify(this.participants));
      console.log('liste' + JSON.stringify(this.participants[0].listDeReponses));
    });
  }

  ngOnInit() {
    //return this.participants;
  }
}
