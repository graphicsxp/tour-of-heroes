import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

@NgModule({
    imports:
    [
        HttpModule,
        FormsModule,
        CommonModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],

    exports: [HttpModule, FormsModule, CommonModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
