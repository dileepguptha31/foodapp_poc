import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./food-court.component').then(m => m.FoodCourtComponent),
    data: {
      title: $localize`FootCourt`
    }
  }
];

