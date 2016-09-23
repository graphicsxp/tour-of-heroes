import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../model/hero.model';
import { HeroService } from '../service/hero.service';

@Component({
  moduleId: module.id,
  templateUrl: './hero-list/hero-list.component.html',
  styleUrls: ['./hero-list/hero-list.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms, ease-in')
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.map(
        e => new Hero(e.id, e.name)
      ),
      error => console.log(error));
  }

  onSelect(hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this._router.navigate(['/heroes/', this.selectedHero.id]);
  }

  add(heroName: string): void {
    heroName = heroName.trim();
    if (!name) { return; }

    this._heroService.create(heroName).then(
      hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this._heroService.delete(hero.id).then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) { this.selectedHero = null; }
    });
  }
}