import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './auth-guard'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard', 
        canActivate : [AuthGuard],
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'main-menu',
        canActivate : [AuthGuard],
        loadChildren: () => import('./views/catalogueitems/catalogue-items.module').then((m) => m.CatalogueItemsModule)
      },
      {
        path: 'food-counter',
        canActivate : [AuthGuard],
        loadChildren: () => import('./views/food-court/food-court.module').then(m => m.FoodCourtModule)
      },
      {
        path: 'orders',
        canActivate : [AuthGuard],
        loadChildren: () => import('./views/orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'invoices',
        canActivate : [AuthGuard],
        loadChildren: () => import('./views/invoice/invoice.module').then(m => m.invoiceModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'login' }
];
