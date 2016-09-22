import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import "rxjs/add/operator/map";

import { HeroService } from '../service/hero.service';
import { Hero } from '../model/hero';


@Component({
    moduleId: module.id,
    templateUrl: './hero-detail/hero-detail.component.html',
    styleUrls: ['./hero-detail/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input()
    hero: Hero;

    constructor(private _heroService: HeroService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            this._heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    save(): void {
        this._heroService.update(this.hero).then(this.goBack);
    }

    goBack(): void {
        window.history.back();
    }
}  