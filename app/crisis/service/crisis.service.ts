import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Crisis } from '../model/crisis.model';

@Injectable()
export class CrisisService {

    private _crisisUrl: string = 'app/crisis';
    private _headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private _http: Http) { }

    getCrisises(): Promise<Crisis[]> {
        return this._http.get(this._crisisUrl)
            .toPromise()
            .then(response => response.json().data as Crisis[])
            .catch(this._handleError)
    }

    getCrisis(id: number | string) {
        return this.getCrisises()
            .then(crisises => crisises.find(crisis => crisis.id === +id));
    }

    private _handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}