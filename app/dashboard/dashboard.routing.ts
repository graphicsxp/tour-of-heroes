import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

export default RouterModule.forChild(dashboardRoutes);
