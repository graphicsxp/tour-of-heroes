import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from '../model/contact.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {

  private _contactsUrl: string = 'app/contacts';
  private _headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private _http: Http) { }

  getContacts(): Promise<Contact[]> {

    return this._http.get(this._contactsUrl)
      .toPromise()
      .then(response => response.json().data as Contact[])
      .catch(this.handleError) 
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
