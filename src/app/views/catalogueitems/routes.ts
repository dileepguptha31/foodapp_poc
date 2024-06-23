import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./catalogueitems.component').then(m => m.CatalogueitemsComponent),
    data: {
      title: `Main Menu`
    }
  }
];
