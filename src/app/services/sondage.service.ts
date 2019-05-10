import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SondageService {

  url = 'api/sondage';
  constructor(private http: HttpClient) {
  }
  options =  {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json;'})
  };
  getAllSondage() {
    // return this.http.get(this.url);
    return this.http.get(this.url + '/allsondage', this.options);
  }
  getAllParticipantsSondage(id: number) {
    return this.http.get(this.url + '/allParticipants/' + id);
  }
  getDateProposses(idSondage: any) {
    return this.http.get(this.url + '/allDateProposee/' + idSondage  , this.options);
  }
  create(mail: any , sondage: any) {
    // let createur =
    return this.http.post(this.url + '/add/' + mail  , sondage , this.options);
    console.log('data' + JSON.stringify(sondage));
  }

  getAllSondageByUser(mail: any) {
    return this.http.get(this.url + '/allsondageByUse/' + mail);
  }

  addDateproposee(idSondage: any, dateproposee: any) {
    return this.http.post(this.url + '/definirDateSondate/' + idSondage, dateproposee , this.options);
  }

  getidSondage() {
    return this.http.get(this.url + '/getIdSondage');
  }

  addParticipant(idsondage: any, idDate: any, login: any ) {
    return this.http.post(this.url + '/repondreAUnSondage/' + idsondage + '/' + idDate, login , this.options );
    console.log('dataadded' + JSON.stringify(idsondage));
  }
}
