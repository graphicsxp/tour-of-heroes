import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module' },
    { path: 'heroes', loadChildren: 'app/hero/hero.module' },
];

export default RouterModule.forRoot(appRoutes); 