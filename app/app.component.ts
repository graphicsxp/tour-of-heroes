import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    subtitle = '(v1)';

    constructor() { }

    ngOnInit() { }
}