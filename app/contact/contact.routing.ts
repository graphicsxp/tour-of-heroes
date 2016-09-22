import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './component/contact.component';

const contactRoutes: Routes = [
    {
        path: '',
        component: ContactComponent
    }
];

export default RouterModule.forChild(contactRoutes);
