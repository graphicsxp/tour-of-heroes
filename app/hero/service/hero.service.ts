import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Hero } from '../model/hero.model';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

    private _heroesUrl: string = 'app/heroes';
    private _headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private _http: Http) { }

    getHeroes(): Observable<Hero[]> {
        return this._http.get(this._heroesUrl)
            .map(this._extractData)
            .catch(this._handleError);
    }

    private _extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }


    getHero(id: number): Observable<Hero> {
        return this.getHeroes().map(heroes => heroes.find(hero => hero.id === id));
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this._heroesUrl}/${hero.id}`;
        return this._http
            .put(url, JSON.stringify(hero), { headers: this._headers })
            .toPromise()
            .then(() => hero)
            .catch(this._handleError);
    }

    create(heroName: string): Promise<Hero> {
        return this._http
            .post(this._heroesUrl, JSON.stringify({ name: heroName }), { headers: this._headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this._handleError);
    }

    delete(id: number): Promise<Hero> {
        const url = `${this._heroesUrl}/${id}`;
        return this._http
            .delete(url, { headers: this._headers })
            .toPromise()
            .then(() => null)
            .catch(this._handleError);
    }

    private _handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}