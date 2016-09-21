import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: '<h1> My First Angular 2 App </h2>'
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}