import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'orderview',
    component: OrdersComponent
  },
  { path: '', redirectTo: 'orderview', pathMatch: 'full' }
];

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class OrdersModule { }
