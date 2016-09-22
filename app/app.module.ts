import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero/component/hero-list.component';
import { HeroDetailComponent } from './hero/component/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './hero/service/hero.service';
import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    exports: [],
    declarations: [AppComponent, HeroListComponent, HeroDetailComponent, DashboardComponent],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
