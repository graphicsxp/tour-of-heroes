import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


import { HeroSearchService } from '../service/hero-search.service';
import { Hero } from '../model/hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: './hero-search/hero-search.component.html',
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

    private _searchTerms = new Subject<string>();
    heroes: Observable<Hero[]>;

    constructor(private _router: Router, private _heroSearchService: HeroSearchService) { }

    ngOnInit() {
        this.heroes = this._searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this._heroSearchService.search(term)
                : Observable.of<Hero[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    search(term: string): void {
        this._searchTerms.next(term);
    }

    gotoDetail(hero: Hero): void {
        let link = ['/', hero.id];
        this._router.navigate(link);
    }
}