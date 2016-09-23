import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module' },
    { path: 'heroes', loadChildren: 'app/hero/hero.module' },
    { path: 'crisis', loadChildren: 'app/crisis/crisis.module' },
    { path: 'contact', loadChildren: 'app/contact/contact.module' },
];

export default RouterModule.forRoot(appRoutes); 