import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import heroRoutes from "./hero.routing";
import { HeroListComponent } from './component/hero-list.component';
import { HeroDetailComponent } from './component/hero-detail.component';
import { HeroSearchComponent } from './component/hero-search.component';
import { HeroService } from './service/hero.service';

@NgModule({
    imports: [SharedModule, heroRoutes],
    exports: [HeroSearchComponent],
    declarations: [HeroListComponent, HeroDetailComponent, HeroSearchComponent],
    providers: [],
})
export default class HeroModule { }

