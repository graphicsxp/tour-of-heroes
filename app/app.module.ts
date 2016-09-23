import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HeroService } from './hero/service/hero.service';
import { ContactService } from './contact/service/contact.service';
import { CrisisService } from './crisis/service/crisis.service';

//import { HeroSearchComponent } from './hero/component/hero-search.component';
import { HighlightDirective } from './highlight.directive';



import { InMemoryDataService } from './in-memory-data.service';

import appRoutes from './app.routing';

@NgModule({
    imports: [BrowserModule, CoreModule, appRoutes, InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    exports: [/*HeroSearchComponent*/],
    declarations: [AppComponent, HighlightDirective/*, HeroSearchComponent*/],
    providers: [HeroService, ContactService, CrisisService],
    bootstrap: [AppComponent]
})
export class AppModule { }
