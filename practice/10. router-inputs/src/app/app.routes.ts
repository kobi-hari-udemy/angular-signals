import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'names/:name', loadComponent: () => import('./pages/name-details/name-details.component')
    }
];
