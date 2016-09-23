import { Component, OnInit } from '@angular/core';

import { CrisisService } from '../service/crisis.service';
import { Crisis } from '../model/crisis.model';

@Component({
    moduleId: module.id,
    templateUrl: './crisis-list/crisis-list.component.html',
    styleUrls: ['./crisis-list/crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

    crisises: Crisis[] = [];

    constructor(private _crisisService: CrisisService) { }

    ngOnInit() {
        this.getCrisises();
    }

    getCrisises() {
        this._crisisService.getCrisises().then(crisises => this.crisises = crisises);
    }
}