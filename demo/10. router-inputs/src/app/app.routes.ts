import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home', 
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path: 'movie/:id',
        loadComponent: () => import('./pages/movie-details/movie-details.component')
    }
];
