import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CrisisService } from '../service/crisis.service';
import { Crisis } from '../model/crisis.model';


@Component({
    moduleId: module.id,
    templateUrl: './crisis-detail/crisis-detail.component.html'
})
export class CrisisDetailComponent implements OnInit {

    @Input()
    crisis: Crisis;

    constructor(private _crisisService: CrisisService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            this._crisisService.getCrisis(id).then(crisis => this.crisis = crisis);
        });
    }

 
}