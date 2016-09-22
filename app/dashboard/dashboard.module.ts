import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import dashboardRoutes from './dashboard.routing';
import { SharedModule } from '../shared/shared.module';
//import { HeroSearchComponent } from '../hero/component/hero-search.component';

@NgModule({
    imports: [SharedModule, dashboardRoutes/*, HeroSearchComponent*/],
    exports: [],
    declarations: [DashboardComponent],
    providers: []
})
export default class DashboardModule { }