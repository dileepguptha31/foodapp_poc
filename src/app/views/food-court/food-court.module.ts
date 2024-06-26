import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCourtFormComponent } from './food-court-form/food-court-form.component';
import { IconModule } from '@coreui/icons-angular';
import {
  AvatarComponent,
  ButtonDirective, CardBodyComponent,
  CardComponent, CardHeaderComponent, CardModule, ColComponent, FormControlDirective,
  FormDirective,
  FormLabelDirective,
  GridModule, ModalModule, RowComponent
} from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FoodCourtComponent } from './food-court.component';
import { FoodCourtViewComponent } from './food-court-view/food-court-view.component';
import { FoodCounterViewComponent } from './food-counter-view/food-counter-view.component';
import { FoodCounterFormComponent } from './food-counter-form/food-counter-form.component';
import { FoodCounterMenuComponent } from './food-counter-menu/food-counter-menu.component';
import { HttpService } from '../../services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '', component: FoodCourtComponent,
    children: [
      {
        path: 'food-court-view', component: FoodCourtViewComponent,
        data: { title: $localize`Food Court` }
      },
      {
        path: 'counter/:id', component: FoodCounterMenuComponent,
        data: { title: $localize`Food Counter` }
      },
      { path: '', redirectTo: 'food-court-view', pathMatch: 'full' }
    ]
  },
];


@NgModule({
  declarations: [FoodCourtComponent, FoodCourtFormComponent, FoodCourtViewComponent, FoodCounterViewComponent, FoodCounterFormComponent, FoodCounterMenuComponent],
  exports: [],
  providers: [HttpService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), HttpClientModule,
    IconModule, ReactiveFormsModule, FormsModule, CardModule, FormDirective,
    ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent,
    ModalModule, GridModule, RowComponent, ColComponent, FormLabelDirective, FormControlDirective, AvatarComponent,
    MatTableModule, MatCheckboxModule,
    HttpClientModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FoodCourtModule { }