import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroService } from './hero/service/hero.service';
import { SharedModule } from './shared/shared.module';

import appRoutes from './app.routing';

@NgModule({
    imports: [BrowserModule, SharedModule, appRoutes],
    exports: [],
    declarations: [AppComponent],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
