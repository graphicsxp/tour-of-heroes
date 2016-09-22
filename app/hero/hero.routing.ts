import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './component/hero-list.component';
import { HeroDetailComponent } from './component/hero-detail.component';

const heroRoutes: Routes = [
    { path: '', component: HeroListComponent },
    { path: ':id', component: HeroDetailComponent }];

export default RouterModule.forChild(heroRoutes);
