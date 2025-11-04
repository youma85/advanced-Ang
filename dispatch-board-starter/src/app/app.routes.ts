import { Routes } from '@angular/router';

/**
 * Application routes configuration - Standalone components only
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/board',
    pathMatch: 'full'
  },
  {
    path: 'board',
    loadComponent: () => import('./board/board.page').then(m => m.BoardPageComponent),
    children: [
      {
        path: 'journey/:id',
        loadComponent: () => import('./journey/journey.page').then(m => m.JourneyPageComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/board'
  }
];
