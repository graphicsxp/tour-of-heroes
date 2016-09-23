import { Component, OnInit, trigger, transition, style, animate, state } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero/service/hero.service';
import { Hero } from '../hero/model/hero.model';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    animations: [
        trigger('heroState', [
            state('inactive', style({ transform: 'translateX(0) scale(1)' })),
            state('active', style({ transform: 'translateX(0) scale(1.1)' })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out')),
            transition('void => inactive', [
                style({ transform: 'translateX(-100%) scale(1)' }),
                animate(100)
            ]),
            transition('inactive => void', [
                animate(100, style({ transform: 'translateX(100%) scale(1)' }))
            ]),
            transition('void => active', [
                style({ transform: 'translateX(0) scale(0)' }),
                animate(200)
            ]),
            transition('active => void', [
                animate(200, style({ transform: 'translateX(0) scale(0)' }))
            ])
        ])
    ]

})
export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(private _heroService: HeroService, private _router: Router) { }

    ngOnInit() {
        this._heroService.getHeroes().subscribe(
            heroes => this.heroes = heroes.slice(1, 5),
            error => console.log(error));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/heroes/', hero.id];
        this._router.navigate(link);
    }

}