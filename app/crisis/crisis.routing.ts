import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './component/crisis-list.component';
import { CrisisDetailComponent } from './component/crisis-detail.component';

const routes: Routes = [
    { path: '', component: CrisisListComponent },
    { path: ':id', component: CrisisDetailComponent },
];

export default RouterModule.forChild(routes);

