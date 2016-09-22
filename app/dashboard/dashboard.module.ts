import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import dashboardRoutes from './dashboard.routing';
import { SharedModule } from '../shared/shared.module';

import HeroModule from '../hero/hero.module';

@NgModule({
    imports: [SharedModule, dashboardRoutes, HeroModule],
    exports: [],
    declarations: [DashboardComponent],
    providers: []
})
export default class DashboardModule { }