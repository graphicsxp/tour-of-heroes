import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeroService } from './hero/service/hero.service';
//import { HeroSearchComponent } from './hero/component/hero-search.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';

import appRoutes from './app.routing';

@NgModule({
    imports: [BrowserModule, SharedModule, appRoutes],
    exports: [/*HeroSearchComponent*/],
    declarations: [AppComponent, HighlightDirective, TitleComponent/*, HeroSearchComponent*/],
    providers: [UserService, HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
