import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  url = 'api/user';
  options =  {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json; charset=utf-8'})
  };
  constructor(private http: HttpClient) {}
  getAlluser() {
    return this.http.get(this.url + '/alluser');
  }
  getAllParticipantsSondage(id: number) {
    return this.http.get(this.url + '/allParticipants/' + id);
  }
  save(user: [{ nom: ''; prenom: ''; mail: ''; mdp: '' }]) {
    return this.http.post(this.url + '/add/' , user)
        .subscribe(
          () => {
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
  }

  create(user: any ) {
    return this.http.post(this.url + '/add', user , this.options);
    console.log('data' + JSON.stringify(user));
  }

  update(user) {
    return this.http.put(this.url, user, { observe: 'response' });
  }
}
