import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CrisisListComponent } from './component/crisis-list.component';
import { CrisisDetailComponent } from './component/crisis-detail.component';
import { CrisisService } from './service/crisis.service';
import routes from './crisis.routing';

@NgModule({
    imports: [SharedModule, routes],
    exports: [],
    declarations: [CrisisListComponent, CrisisDetailComponent],
    providers: [],
})
export default class CrisisModule { }