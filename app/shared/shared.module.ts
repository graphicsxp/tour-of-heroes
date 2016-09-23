import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AwesomePipe } from './pipe/awesome.pipe';
import { HighlightDirective } from './directive/highlight.directive';


@NgModule({
    imports:
    [
        CommonModule,
    ],

    exports: [HttpModule, FormsModule, CommonModule, AwesomePipe, HighlightDirective],
    declarations: [AwesomePipe, HighlightDirective],
    providers: [],
})
export class SharedModule { }
