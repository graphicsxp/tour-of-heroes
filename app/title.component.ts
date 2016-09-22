import { Component, OnInit, Input } from '@angular/core';

import { UserService } from './user.service';

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: 'title.component.html'
})
export class TitleComponent implements OnInit {

    @Input()
    subtitle: string  = '';
    title: string = 'Tour of Heroes';
    user = '';

    constructor(private _userService: UserService) {
        this.user = _userService.userName;
     }

    ngOnInit() { }
}