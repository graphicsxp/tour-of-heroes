import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from '../model/hero.model';

@Injectable()
export class HeroSearchService {

    constructor(private _http: Http) { }

    search(term: string): Observable<Hero[]> {
        return this._http
            .get(`app/heroes/?name=${term}`)
            .map((r: Response) => r.json().data as Hero[]);
    }
}