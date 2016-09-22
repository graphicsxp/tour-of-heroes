import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './component/hero-list.component';
import { HeroDetailComponent } from './component/hero-detail.component';

const heroRoutes: Routes = [
    {
        path: '',
        component: HeroListComponent
    },
    {
        path: '/:id',
        component: HeroDetailComponent
    }
];
@NgModule({
    imports: [CommonModule, RouterModule.forChild(heroRoutes)],
    exports: [],
    declarations: [HeroListComponent, HeroDetailComponent],
    providers: [],
})
export default class HeroModule { }
