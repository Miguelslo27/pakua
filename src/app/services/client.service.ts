import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ClientService {

  constructor(private http: Http) {}

  public getClients(): Promise<any> {
    return this.http.get('/assets/mock-clients.json')
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch(error => {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      });
  }
}