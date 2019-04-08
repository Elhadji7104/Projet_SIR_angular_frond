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
    return this.http.get(this.url + '/allsondage');
  }
  getAllParticipantsSondage(id: number) {
    return this.http.get(this.url + '/allParticipants/' + id);
  }

  create(mail: any , sondage: any) {
    //let createur =
    return this.http.post(this.url + '/add/' + mail  , sondage , this.options);
    console.log('data' + JSON.stringify(sondage));
  }

  getAllSondageByUser(mail: any) {
    return this.http.get(this.url + '/allsondageByUse/' + mail);
  }
}
