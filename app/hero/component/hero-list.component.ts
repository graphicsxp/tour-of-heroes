import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  moduleId: module.id,
  templateUrl: './hero-list/hero-list.component.html',
  styleUrls: ['./hero-list/hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;


  constructor(private _heroService: HeroService, private _router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }
}